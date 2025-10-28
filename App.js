import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Animated,
  Alert,
  AsyncStorage,
} from 'react-native';
import lessonsData from './data/lessons.json';

const COLORS = {
  primary: '#4F46E5',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  background: '#F9FAFB',
  white: '#FFFFFF',
  text: '#1F2937',
  lightText: '#6B7280',
  lightBorder: '#E5E7EB',
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [userProgress, setUserProgress] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState(null);
  const scaleAnim = new Animated.Value(1);

  // Carregar progresso salvo
  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const saved = await AsyncStorage.getItem('userProgress');
      if (saved) {
        setUserProgress(JSON.parse(saved));
      }
    } catch (error) {
      console.log('Erro ao carregar progresso:', error);
    }
  };

  const saveProgress = async (newProgress) => {
    try {
      await AsyncStorage.setItem('userProgress', JSON.stringify(newProgress));
    } catch (error) {
      console.log('Erro ao salvar progresso:', error);
    }
  };

  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCurrentScreen('lesson');
  };

  const handleAnswerSelect = (answer) => {
    if (showFeedback) return;

    const currentQuestion = selectedLesson.questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    setSelectedAnswer(answer);
    setFeedbackType(isCorrect ? 'success' : 'error');
    setShowFeedback(true);

    if (isCorrect) {
      setScore(score + 1);
      animateSuccess();
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 2000);
  };

  const animateSuccess = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedLesson.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      handleLessonComplete();
    }
  };

  const handleLessonComplete = () => {
    const totalQuestions = selectedLesson.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const newProgress = {
      ...userProgress,
      [selectedLesson.id]: {
        completed: true,
        score: score,
        percentage: percentage,
        date: new Date().toISOString(),
      },
    };

    saveProgress(newProgress);
    setUserProgress(newProgress);

    Alert.alert(
      'Parabéns!',
      `Você completou a lição "${selectedLesson.title}"!\n\nPontuação: ${score}/${totalQuestions} (${percentage}%)`,
      [
        {
          text: 'Voltar',
          onPress: () => {
            setCurrentScreen('home');
            setSelectedLesson(null);
          },
        },
      ]
    );
  };

  const handleBackToHome = () => {
    Alert.alert(
      'Sair da lição',
      'Tem certeza que deseja sair? Seu progresso será perdido.',
      [
        { text: 'Cancelar', onPress: () => {} },
        {
          text: 'Sair',
          onPress: () => {
            setCurrentScreen('home');
            setSelectedLesson(null);
          },
        },
      ]
    );
  };

  const renderHome = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inglês Diário</Text>
        <Text style={styles.headerSubtitle}>Aprenda inglês de forma divertida</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{Object.keys(userProgress).length}</Text>
          <Text style={styles.statLabel}>Lições Completas</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            {Object.values(userProgress).reduce((acc, p) => acc + p.score, 0)}
          </Text>
          <Text style={styles.statLabel}>Pontos Totais</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Lições Disponíveis</Text>

      {lessonsData.lessons.map((lesson) => {
        const progress = userProgress[lesson.id];
        const isCompleted = progress?.completed;

        return (
          <TouchableOpacity
            key={lesson.id}
            style={[styles.lessonCard, isCompleted && styles.completedLesson]}
            onPress={() => handleSelectLesson(lesson)}
            activeOpacity={0.7}
          >
            <View style={styles.lessonContent}>
              <View style={styles.lessonHeader}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                {isCompleted && <Text style={styles.completedBadge}>✓</Text>}
              </View>
              <Text style={styles.lessonDescription}>{lesson.description}</Text>
              <View style={styles.lessonFooter}>
                <Text style={styles.levelBadge}>{lesson.level}</Text>
                {progress && (
                  <Text style={styles.scoreText}>{progress.percentage}%</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  const renderLesson = () => {
    if (!selectedLesson) return null;

    const currentQuestion = selectedLesson.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / selectedLesson.questions.length) * 100;
    const isAnswered = selectedAnswer !== null;

    return (
      <SafeAreaView style={styles.lessonContainer}>
        <View style={styles.lessonHeader2}>
          <TouchableOpacity onPress={handleBackToHome}>
            <Text style={styles.backButton}>← Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.lessonTitle2}>{selectedLesson.title}</Text>
          <Text style={styles.questionCounter}>
            {currentQuestionIndex + 1}/{selectedLesson.questions.length}
          </Text>
        </View>

        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: `${progress}%` }]}
          />
        </View>

        <ScrollView style={styles.questionContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>

          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const showCorrect = showFeedback && isCorrect;
              const showIncorrect = showFeedback && isSelected && !isCorrect;

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    isSelected && styles.selectedOption,
                    showCorrect && styles.correctOption,
                    showIncorrect && styles.incorrectOption,
                    isAnswered && !isSelected && styles.disabledOption,
                  ]}
                  onPress={() => !isAnswered && handleAnswerSelect(option)}
                  disabled={isAnswered}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && styles.selectedOptionText,
                      (showCorrect || showIncorrect) && styles.feedbackOptionText,
                    ]}
                  >
                    {option}
                  </Text>
                  {showCorrect && <Text style={styles.feedbackIcon}>✓</Text>}
                  {showIncorrect && <Text style={styles.feedbackIcon}>✗</Text>}
                </TouchableOpacity>
              );
            })}
          </View>

          {showFeedback && (
            <View
              style={[
                styles.feedbackBox,
                feedbackType === 'success' ? styles.successBox : styles.errorBox,
              ]}
            >
              <Text style={styles.feedbackTitle}>
                {feedbackType === 'success' ? 'Correto! 🎉' : 'Incorreto'}
              </Text>
              <Text style={styles.feedbackText}>
                {currentQuestion.explanation}
              </Text>
            </View>
          )}
        </ScrollView>

        {isAnswered && (
          <View style={styles.scoreDisplay}>
            <Text style={styles.scoreLabel}>Pontuação: {score}/{currentQuestionIndex + 1}</Text>
          </View>
        )}
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      {currentScreen === 'home' ? renderHome() : renderLesson()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
    gap: 15,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.lightText,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  lessonCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedLesson: {
    borderLeftWidth: 4,
    borderLeftColor: COLORS.success,
  },
  lessonContent: {
    flex: 1,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    flex: 1,
  },
  completedBadge: {
    fontSize: 20,
    color: COLORS.success,
    marginLeft: 10,
  },
  lessonDescription: {
    fontSize: 14,
    color: COLORS.lightText,
    marginBottom: 12,
  },
  lessonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelBadge: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    backgroundColor: 'rgba(79, 70, 229, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.success,
  },
  lessonContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  lessonHeader2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightBorder,
  },
  backButton: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
  },
  lessonTitle2: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    flex: 1,
    textAlign: 'center',
  },
  questionCounter: {
    fontSize: 14,
    color: COLORS.lightText,
    fontWeight: '600',
  },
  progressBar: {
    height: 4,
    backgroundColor: COLORS.lightBorder,
    width: '100%',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  questionContainer: {
    flex: 1,
    padding: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 30,
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: COLORS.lightBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedOption: {
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(79, 70, 229, 0.05)',
  },
  correctOption: {
    borderColor: COLORS.success,
    backgroundColor: 'rgba(16, 185, 129, 0.05)',
  },
  incorrectOption: {
    borderColor: COLORS.error,
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
  },
  disabledOption: {
    opacity: 0.6,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '500',
    flex: 1,
  },
  selectedOptionText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  feedbackOptionText: {
    fontWeight: '600',
  },
  feedbackIcon: {
    fontSize: 20,
    marginLeft: 10,
  },
  feedbackBox: {
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  successBox: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.success,
  },
  errorBox: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.error,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  feedbackText: {
    fontSize: 14,
    color: COLORS.lightText,
    lineHeight: 20,
  },
  scoreDisplay: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightBorder,
  },
  scoreLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 30,
    lineHeight: 28,
  },
});
