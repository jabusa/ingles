# 🚀 COMECE AQUI - Guia Rápido

Bem-vindo ao **Inglês Diário**! Este é um aplicativo Android para aprender inglês de forma interativa.

## 📱 O que você tem

Um projeto completo React Native com:
- ✅ 5 lições prontas (Básico e Intermediário)
- ✅ 15 perguntas interativas
- ✅ Sistema de pontuação
- ✅ Interface mobile otimizada
- ✅ Configuração pronta para Google Play Store

## 🎯 Próximos Passos

### 1️⃣ Testar Localmente (Opcional)

```bash
npm start
```

Depois escolha:
- `a` para Android (requer emulador)
- `w` para web (navegador)
- Escanear QR com Expo Go (no celular)

### 2️⃣ Compilar APK

Siga o guia: **COMPILAR_APK.md**

Resumo:
```bash
npm install -g eas-cli
eas login
eas build --platform android --type app-bundle
```

### 3️⃣ Publicar na Google Play Store

Siga o guia: **GUIA_PUBLICACAO.md**

## 📚 Documentação

| Arquivo | Descrição |
|---------|-----------|
| **README.md** | Documentação completa do projeto |
| **COMPILAR_APK.md** | Como compilar o APK passo a passo |
| **GUIA_PUBLICACAO.md** | Como publicar na Google Play Store |
| **App.js** | Código principal do aplicativo |
| **data/lessons.json** | Banco de dados de lições |

## 🎨 Personalizar o App

### Adicionar Novas Lições

Edite `data/lessons.json`:

```json
{
  "id": 6,
  "level": "Avançado",
  "title": "Sua Lição",
  "description": "Descrição",
  "questions": [
    {
      "id": 1,
      "type": "translation",
      "question": "Pergunta aqui?",
      "options": ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
      "correctAnswer": "Opção 1",
      "explanation": "Explicação aqui"
    }
  ]
}
```

### Mudar Cores

Em `App.js`, procure por `const COLORS` e edite:

```javascript
const COLORS = {
  primary: '#4F46E5',      // Cor principal
  success: '#10B981',      // Verde
  error: '#EF4444',        // Vermelho
};
```

### Mudar Nome/Descrição

Em `app.json`:

```json
{
  "expo": {
    "name": "Seu Nome",
    "slug": "seu-slug"
  }
}
```

## 🔑 Informações Importantes

- **Package**: `com.inglesdiario.app`
- **Versão**: 1.0.0
- **Plataforma**: Android
- **Tecnologia**: React Native + Expo

## 💡 Dicas

1. **Antes de compilar**: Teste no navegador com `npm run web`
2. **Antes de publicar**: Teste em um dispositivo real
3. **Backup**: Faça backup do projeto antes de grandes mudanças
4. **Atualizações**: Aumente `versionCode` em `app.json` para cada atualização

## ❓ Dúvidas Frequentes

**P: Quanto custa publicar?**
R: $25 USD (taxa única na Google Play Store)

**P: Quanto tempo leva para aprovar?**
R: Geralmente 24-48 horas

**P: Posso ganhar dinheiro?**
R: Sim! Com anúncios ou versão paga

**P: Como adicionar mais lições?**
R: Edite `data/lessons.json` e recompile

**P: Posso mudar as cores?**
R: Sim! Edite `const COLORS` em `App.js`

## 🚀 Checklist Final

Antes de publicar:

- [ ] Testou no navegador (`npm run web`)
- [ ] Testou em dispositivo Android
- [ ] Adicionou todas as lições desejadas
- [ ] Personalizou cores e nome
- [ ] Leu `COMPILAR_APK.md`
- [ ] Leu `GUIA_PUBLICACAO.md`
- [ ] Criou conta Google Play
- [ ] Preparou ícone (512x512)
- [ ] Preparou screenshots

## 📞 Precisa de Ajuda?

1. Leia o `README.md` completo
2. Consulte `COMPILAR_APK.md` para erros de compilação
3. Consulte `GUIA_PUBLICACAO.md` para erros de publicação

## 🎉 Pronto?

Você tem tudo que precisa! Siga os guias e boa sorte com seu aplicativo! 🚀

---

**Desenvolvido com ❤️ para ajudar pessoas a aprender inglês**
