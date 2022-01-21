import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 01',
        icon: 'cube-outline',
        component: 'Animation01Screen'
    },
    {
        name: 'Animation 02',
        icon: 'albums-outline',
        component: 'Animation02Screen'
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
]