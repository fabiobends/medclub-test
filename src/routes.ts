const routes = {
  createAppointment: 'createAppointment',
  home: 'home',
} as const;

export type RootParamsList = {
  [routes.createAppointment]?: never;
  [routes.home]?: never;
};

export default routes;
