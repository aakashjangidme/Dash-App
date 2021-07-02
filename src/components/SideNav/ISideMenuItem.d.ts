export default interface ISideMenuItem {
  label: string;
  icon?: any;
  activeIcon?: any;
  to?: string | LocationDescriptor<unknown>;
  component?: any;
  onClick?: any;
}
