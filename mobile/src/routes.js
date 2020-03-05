import { createAppContainer } from 'react-navigation'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack'

import Home from './pages/Home'
import Categories from './pages/Categories'

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Menu'
            }
        },
        Categories: {
            screen: Categories,
            mode: 'modal',
            navigationOptions: {
                title: 'Categorias',
                ...TransitionPresets.ModalPresentationIOS,
                cardOverlayEnabled: true,
                gestureEnabled: true,
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7D40E7'
            }
        }
    })
)

export default Routes;