# 📚 Exemplos de Novas Lições para Adicionar

Use estes exemplos para expandir o banco de dados de lições. Adicione ao arquivo `data/lessons.json`.

## Exemplo 1: Família

```json
{
  "id": 6,
  "level": "Básico",
  "title": "Família",
  "description": "Aprenda os nomes dos membros da família em inglês",
  "questions": [
    {
      "id": 1,
      "type": "translation",
      "question": "Como você diz 'mãe' em inglês?",
      "options": ["Father", "Mother", "Sister", "Brother"],
      "correctAnswer": "Mother",
      "explanation": "'Mother' significa mãe em português."
    },
    {
      "id": 2,
      "type": "translation",
      "question": "Qual é a tradução de 'avó'?",
      "options": ["Grandfather", "Grandmother", "Aunt", "Uncle"],
      "correctAnswer": "Grandmother",
      "explanation": "'Grandmother' é avó em português."
    },
    {
      "id": 3,
      "type": "multipleChoice",
      "question": "Complete: 'My ___ is my father's sister.'",
      "options": ["aunt", "uncle", "cousin", "niece"],
      "correctAnswer": "aunt",
      "explanation": "A irmã do seu pai é sua tia (aunt)."
    }
  ]
}
```

## Exemplo 2: Comida

```json
{
  "id": 7,
  "level": "Básico",
  "title": "Comida",
  "description": "Aprenda nomes de alimentos em inglês",
  "questions": [
    {
      "id": 1,
      "type": "translation",
      "question": "Como você diz 'maçã' em inglês?",
      "options": ["Banana", "Apple", "Orange", "Grape"],
      "correctAnswer": "Apple",
      "explanation": "'Apple' significa maçã."
    },
    {
      "id": 2,
      "type": "translation",
      "question": "Qual é a tradução de 'pão'?",
      "options": ["Butter", "Bread", "Cheese", "Milk"],
      "correctAnswer": "Bread",
      "explanation": "'Bread' é pão em português."
    },
    {
      "id": 3,
      "type": "multipleChoice",
      "question": "Complete: 'I like to eat ___ for breakfast.'",
      "options": ["dinner", "eggs", "dinner", "lunch"],
      "correctAnswer": "eggs",
      "explanation": "Ovos (eggs) é um alimento comum no café da manhã."
    }
  ]
}
```

## Exemplo 3: Esportes

```json
{
  "id": 8,
  "level": "Intermediário",
  "title": "Esportes",
  "description": "Aprenda vocabulário sobre esportes",
  "questions": [
    {
      "id": 1,
      "type": "translation",
      "question": "Como você diz 'futebol' em inglês?",
      "options": ["Basketball", "Football", "Tennis", "Baseball"],
      "correctAnswer": "Football",
      "explanation": "'Football' é futebol em português."
    },
    {
      "id": 2,
      "type": "multipleChoice",
      "question": "Complete: 'She ___ tennis every weekend.'",
      "options": ["play", "plays", "playing", "played"],
      "correctAnswer": "plays",
      "explanation": "Com 'she' (terceira pessoa), adicionamos 's' ao verbo."
    },
    {
      "id": 3,
      "type": "translation",
      "question": "Qual é a tradução de 'natação'?",
      "options": ["Running", "Swimming", "Cycling", "Hiking"],
      "correctAnswer": "Swimming",
      "explanation": "'Swimming' significa natação."
    }
  ]
}
```

## Exemplo 4: Casa

```json
{
  "id": 9,
  "level": "Básico",
  "title": "Casa",
  "description": "Aprenda nomes de cômodos e móveis",
  "questions": [
    {
      "id": 1,
      "type": "translation",
      "question": "Como você diz 'cozinha' em inglês?",
      "options": ["Bedroom", "Kitchen", "Bathroom", "Living room"],
      "correctAnswer": "Kitchen",
      "explanation": "'Kitchen' significa cozinha."
    },
    {
      "id": 2,
      "type": "translation",
      "question": "Qual é a tradução de 'janela'?",
      "options": ["Door", "Window", "Wall", "Floor"],
      "correctAnswer": "Window",
      "explanation": "'Window' é janela em português."
    },
    {
      "id": 3,
      "type": "multipleChoice",
      "question": "Complete: 'The ___ is where we sleep.'",
      "options": ["kitchen", "bathroom", "bedroom", "living room"],
      "correctAnswer": "bedroom",
      "explanation": "O quarto (bedroom) é onde dormimos."
    }
  ]
}
```

## Exemplo 5: Roupas

```json
{
  "id": 10,
  "level": "Básico",
  "title": "Roupas",
  "description": "Aprenda nomes de roupas e acessórios",
  "questions": [
    {
      "id": 1,
      "type": "translation",
      "question": "Como você diz 'camiseta' em inglês?",
      "options": ["Pants", "T-shirt", "Hat", "Shoes"],
      "correctAnswer": "T-shirt",
      "explanation": "'T-shirt' significa camiseta."
    },
    {
      "id": 2,
      "type": "translation",
      "question": "Qual é a tradução de 'sapato'?",
      "options": ["Sock", "Boot", "Shoe", "Sandal"],
      "correctAnswer": "Shoe",
      "explanation": "'Shoe' é sapato em português."
    },
    {
      "id": 3,
      "type": "multipleChoice",
      "question": "Complete: 'I wear a ___ to keep warm in winter.'",
      "options": ["shirt", "shorts", "jacket", "hat"],
      "correctAnswer": "jacket",
      "explanation": "Usamos jaqueta (jacket) para nos manter quentes no inverno."
    }
  ]
}
```

## Como Adicionar ao Projeto

1. Abra `data/lessons.json`
2. Copie o JSON de uma lição acima
3. Cole dentro do array `"lessons"`
4. Salve o arquivo
5. Recompile o aplicativo

**Exemplo de estrutura:**

```json
{
  "lessons": [
    { ... lição 1 ... },
    { ... lição 2 ... },
    { ... lição 3 ... },
    { ... lição 4 ... },
    { ... lição 5 ... },
    { ... NOVA LIÇÃO ... }
  ]
}
```

## Dicas para Criar Boas Lições

1. **Mantenha consistência**: Use o mesmo formato para todas as perguntas
2. **Progressão**: Comece com palavras simples e aumente a dificuldade
3. **Explicações claras**: Cada resposta deve ter uma explicação útil
4. **Variedade**: Alterne entre tradução e múltipla escolha
5. **Relevância**: Escolha vocabulário útil e prático
6. **Contexto**: Mostre como as palavras são usadas em frases

## Estrutura de Tipos de Pergunta

### Translation (Tradução)
```json
{
  "type": "translation",
  "question": "Como você diz '[palavra em português]' em inglês?",
  "options": ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
  "correctAnswer": "Opção correta"
}
```

### Multiple Choice (Múltipla Escolha)
```json
{
  "type": "multipleChoice",
  "question": "Complete a frase: '[frase com ___]'",
  "options": ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
  "correctAnswer": "Opção correta"
}
```

---

**Dica**: Comece com 3-5 perguntas por lição para manter o usuário engajado!
