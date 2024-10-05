# Lista de Tarefas - Desafio ResTIC 36

## Descrição do Projeto

Este projeto corresponde ao desafio da residência em software ResTIC36, implementando o design proposto no início do curso no Figma. Faz parte da trilha de desenvolvimento mobile, oferecida pelo CEPEDI.

O objetivo é criar uma aplicação de lista de tarefas utilizando React Native, que permite adicionar tarefas, visualizar a lista, ver detalhes das tarefas e exibir uma contagem total. O aplicativo também inclui cartões (`CardNumber`) para representar informações adicionais ou estatísticas.

### Funcionalidades Implementadas

- **Adição de Tarefas**: Permite ao usuário adicionar novas tarefas com descrição. O sistema verifica campos vazios e evita duplicações.
- **Contagem de Tarefas**: Exibe o total de tarefas e finalizadas. A contagem é atualizada automaticamente.
- **Ordenação de Tarefas**: Utiliza `sort` e `useMemo` para ordenar tarefas por status (em aberto primeiro).
- **Interface de Usuário**:
  - Campo de entrada para novas tarefas.
  - Botão com ícone para adicionar tarefas.
  - Lista de tarefas dividida entre "em aberto" e "finalizadas".
  - Mensagens para listas vazias.
  - Remoção de tarefas com confirmação.
  - Cartões (`CardNumber`) para exibir estatísticas.
- **Gerenciamento de Estado**: Usa `useContext` e `AsyncStorage` para persistência de dados.
- **Validação de Formulário**: Implementa validação básica com `Formik` e `Yup`.
- **Layout Responsivo**: Usa `flex-grow` para garantir que o texto das tarefas não quebre o layout.
- **Alertas Personalizados**: Implementação de componentes de alerta customizados.

### Tecnologias Utilizadas

- **React Native**: Framework principal para desenvolvimento móvel.
- **React Navigation**: Navegação entre telas.
- **Styled Components**: Estilização e temas.
- **React Context API**: Gerenciamento de estado global.
- **AsyncStorage**: Persistência de dados local.
- **Formik & Yup**: Validação de formulários.

## Instruções para Executar o Projeto

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/diogomasc/ToDoList_DesafioResTIC36.git
   ```

2. **Navegue até o Diretório do Projeto**:

   ```bash
   cd ToDoList_DesafioResTIC36
   ```

3. **Instale as Dependências**:

   ```bash
   npm install
   ```

4. **Inicie o Projeto**:
   ```bash
   npm start
   ```

## Telas

<div style="display: flex; overflow-x: auto;">
   <img src="https://github.com/user-attachments/assets/e61bf0e0-8d71-4284-b6ef-9eae15f63eff" alt="Tela 01" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/02b0153b-602f-4168-a0c1-b9bbb22b557b" alt="Tela 02" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/3f07f9f2-d40a-4402-b84b-efbb64b754f3" alt="Tela 03" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/5a339fe0-19ab-47dd-b004-8b0b66948f54" alt="Tela 04" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/d84a8288-57c4-45f2-8e1c-f0a859cbd952" alt="Tela 05" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/eee6295d-f542-4d2a-bde4-39544e95bacc" alt="Tela 06" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/d28ff357-efae-4e2d-b159-ea9168727be2" alt="Tela 07" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/d862e13c-d8c6-4830-97b9-5ab7caa879b8" alt="Tela 08" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/feab6b98-0b97-4d83-a7a7-ce04b03a11a6" alt="Tela 09" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/b7fc3043-8631-4b16-b751-3649e8d15e29" alt="Tela 10" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/3e18d462-3c50-4bd6-80e8-78885120455b" alt="Tela 11" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/f58abd8d-b102-429a-90fb-477468a2cc0c" alt="Tela 12" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/b6e7e180-0b6c-4ca8-83c8-727fa7679355" alt="Tela 13" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/4e809953-6876-4599-8a42-cf724e2fe6d6" alt="Tela 14" style="height: 500px; margin-right: 10px;">
</div>
