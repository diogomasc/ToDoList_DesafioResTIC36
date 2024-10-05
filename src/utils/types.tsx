export type RootStackParamList = {
  Home: undefined;
  NewTask: undefined;
  Welcome: undefined;
  SignIn: undefined;
  Register: undefined;
};

export type TaskProps = {
  id: number;
  title: string;
  status: boolean;
  onCheck?: () => void;
  onRemove?: () => void;
};
