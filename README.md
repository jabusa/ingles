# 📱 Inglês Diário - Aplicativo de Aprendizado de Inglês

Um aplicativo Android interativo para aprender inglês de forma divertida.
## ✨ Características

- **Lições Estruturadas**: Organizadas por níveis (Básico, Intermediário, Avançado)
- **Múltiplos Tipos de Perguntas**:
  - Tradução (Português ↔ Inglês)
  - Múltipla Escolha
  - Completar Frases
- **Sistema de Pontuação**: Acompanhe seu progresso e pontos
- **Feedback Instantâneo**: Saiba imediatamente se acertou ou errou
- **Persistência de Dados**: Seu progresso é salvo automaticamente
- **Interface Mobile**: Design otimizado para smartphones
- **Animações Suaves**: Experiência visual agradável

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para compilar e distribuir
- **JavaScript/ES6+**: Linguagem de programação
- **AsyncStorage**: Para persistência de dados local

## 📦 Estrutura do Projeto

```
ingles-diario/
├── App.js                 # Componente principal
├── app.json              # Configuração do Expo
├── eas.json              # Configuração de build
├── data/
│   └── lessons.json      # Banco de dados de lições
├── assets/               # Ícones e imagens
├── package.json          # Dependências
├── GUIA_PUBLICACAO.md    # Guia para publicar na Play Store
└── README.md             # Este arquivo
```

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js 14+ instalado
- npm ou yarn
- Expo CLI instalado (`npm install -g expo-cli`)

### Instalação

```bash
# Clonar ou navegar para o diretório
cd ingles-diario

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm start
```

### Executar em Diferentes Plataformas

```bash

# Executar no Android (requer Android Studio ou emulador)
npm run android

# Executar no iOS (requer macOS)
npm run ios

# Executar na web (navegador)
npm run web

# Executar com Expo Go (no celular)
# Escaneie o QR code com o app Expo Go
```

## 📝 Adicionar Novas Lições

Edite o arquivo `data/lessons.json` para adicionar novas lições:

```json
{
  "id": 6,
  "level": "Avançado",
  "title": "Phrasal Verbs",
  "description": "Aprenda phrasal verbs comuns",
  "questions": [
    {
      "id": 1,
      "type": "translation",
      "question": "O que significa 'get up'?",
      "options": ["Levantar", "Sentar", "Correr", "Pular"],
      "correctAnswer": "Levantar",
      "explanation": "'Get up' significa levantar ou acordar."
    }
  ]
}
```

### Tipos de Perguntas Disponíveis

- `translation`: Tradução de palavras ou frases
- `multipleChoice`: Múltipla escolha com 4 opções
- `fillInTheBlanks`: Completar frases (em desenvolvimento)

## 🎨 Personalização

### Cores

Edite a paleta de cores em `App.js`:

```javascript
const COLORS = {
  primary: '#4F46E5',      // Cor principal (roxo)
  success: '#10B981',      // Cor de sucesso (verde)
  error: '#EF4444',        // Cor de erro (vermelho)
  // ... outras cores
};
```

### Fontes

Para adicionar fontes customizadas:

```bash
npm install expo-font
```

Depois importe e use em `App.js`.

## 📊 Sistema de Progresso

O aplicativo salva automaticamente:
- Lições completadas
- Pontuação em cada lição
- Percentual de acertos
- Data de conclusão

Os dados são armazenados localmente usando `AsyncStorage`.

## 🔐 Privacidade e Segurança

- Nenhum dado é enviado para servidores externos
- Todos os dados são armazenados localmente no dispositivo
- Nenhuma coleta de informações pessoais

## 📱 Compilar APK para Google Play Store

Veja o arquivo `GUIA_PUBLICACAO.md` para instruções completas sobre como:
1. Gerar chaves de assinatura
2. Compilar o APK com EAS
3. Publicar na Google Play Store

Resumo rápido:

```bash
# Compilar APK
eas build --platform android --type apk

# Ou compilar App Bundle (recomendado)
eas build --platform android --type app-bundle
```

## 🐛 Troubleshooting

### Erro ao executar `npm start`

```bash
# Limpar cache
npm start -- --clear

# Ou reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Emulador Android não funciona

```bash
# Verificar dispositivos conectados
adb devices

# Iniciar emulador manualmente
emulator -avd <nome_do_avd>
```

### Erro de compilação

```bash
# Atualizar Expo CLI
npm install -g expo-cli@latest

# Atualizar dependências
npm update
```

## 📚 Recursos Úteis

- [Documentação React Native](https://reactnative.dev/)
- [Documentação Expo](https://docs.expo.dev/)
- [Google Play Console](https://play.google.com/console)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)

## 📄 Licença

Este projeto é fornecido como está para fins educacionais.

## 🤝 Contribuições

Sinta-se livre para fazer fork, modificar e melhorar este projeto!

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Desenvolvido com ❤️ para ajudar pessoas a aprender inglês**
