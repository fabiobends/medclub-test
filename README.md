# MedClub App

Esse aplicativo foi implementado de acordo com o teste proposto da [Medclub](https://medclub.com.br/home).

O que esse aplicativo faz:

- Mostra uma lista de consultas na primeira tela.
- Cada item mostra o médico(a), data e hora da consulta, além de botão para remover a consulta.
- Ao clicar no item, um popup aparece mais detalhes da consulta, mostrando além da informações anteriores, a localização (hospital) e especialidade do profissional.
- Ao clicar no botão de "+", o usuário vai para a tela "Criar consulta", onde todas essas cinco informações (data, hora, especialidade, médico e localização) podem ser selecionadas e uma consulta pode ser criada.
  - Vale salientar que após selecionar a especialidade da consulta, são mostrados no item posterior apenas os médicos daquela especialidade, o que é um comum na medicina.
- Ao criar uma consulta, o usuário volta para a tela de consultas com um novo item na lista.

Melhorias:

- O aplicativo se adapta ao tema do sistema atual usuário, ou seja, caso o sistema estiver em tema escuro, o aplicativo também estará, assim como no tema claro.
- O aplicativo tem um ícone customizado, de acordo o que tem de mais atual no sistema Android, que são os [ícones adaptáveis](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive?hl=pt-br).

## 💻 Tecnologias

Este repositório é baseado em:

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)

Além disso foram adicionadas algumas bibliotecas:

- [react-native-svg](https://github.com/software-mansion/react-native-svg)
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)
- [react-native-dialog](https://github.com/mmazzarolo/react-native-dialog)

## 🚀 Rodando o projeto

- Clone o projeto
- Execute os seguintes comandos:

```bash
npm install
npm start
# em um segundo terminal execute
npm run android
```

P.S.: Esse projeto só funciona no Android porque foi pedido APK apenas na entrega.

## 😃 Resultado

|                       Claro                       |                      Escuro                      |
| :-----------------------------------------------: | :----------------------------------------------: |
| <img src=".github/assets/light.gif" width="400"/> | <img src=".github/assets/dark.gif" width="400"/> |
