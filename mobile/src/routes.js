import { createAppContainer } from 'react-navigation'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack'

import Home from './pages/Home'
import NewQuiz from './pages/NewQuiz'
import MyQuizzes from './pages/MyQuizzes'
// import Question from './pages/Question'
import Explanation from './pages/Explanation'

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Menu'
            }
        },
        NewQuiz: {
            screen: NewQuiz,
            navigationOptions: {
                title: 'Novo Teste'
            }
        },
        MyQuizzes: {
            screen: MyQuizzes,
            navigationOptions: {
                title: 'Meus Testes'
            }
        },
        // Question: {
        //     screen: Question,
        //     navigationOptions: {
        //         title: 'Meus Testes'
        //     }
        // },
        Explanation: {
            screen: Explanation,
            mode: 'modal',
            navigationOptions: {
                title: 'Categorias',
                ...TransitionPresets.ModalPresentationIOS,
                cardOverlayEnabled: true,
                gestureEnabled: true,
            }
        },

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