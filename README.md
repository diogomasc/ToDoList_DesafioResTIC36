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
   <img src="https://github.com/user-attachments/assets/bdfb36ba-0151-4349-bf87-a3d84b96be7a" alt="Tela 01" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/984fb03e-632c-4660-9262-4c8a3ad28b1b" alt="Tela 02" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/f8248dc9-d421-44df-93a4-db03c8770c8a" alt="Tela 03" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/98fe73f7-8153-4aad-8801-afc3b2f834db" alt="Tela 04" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/88c22ef7-c081-4e87-904c-56e5e63982c0" alt="Tela 05" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/53b4c085-bd4f-4a42-bc0b-b73cb40847e4" alt="Tela 06" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/c5eeb61b-5bd8-45b1-b8b6-539ae36a6283" alt="Tela 07" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/85bde40a-e3cd-4f8b-81ea-5552b9ab9965" alt="Tela 08" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/f4481059-3ad6-4162-bfb9-d50fdf6351b4" alt="Tela 09" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/8b6c78ae-1d98-4f7e-8aff-17026ffe1ba1" alt="Tela 10" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/8135a199-ae6d-4ac9-a655-9c9e96d21ad7" alt="Tela 11" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/596c5c4a-3e39-42d2-a3cf-e1600dfed653" alt="Tela 12" style="height: 500px; margin-right: 10px;">
</div>
