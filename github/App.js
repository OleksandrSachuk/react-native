import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import TopRepos from './components/top-repos';
import DetailedRepo from './components/detailed-repo';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Scene key="root">
                    <Scene key="TopRepos"
                           component={TopRepos}
                           title="Top repos"
                           initial
                    />
                    <Scene
                        key="DetailedRepo"
                        component={DetailedRepo}
                        title="Detailed repo"
                    />
                </Scene>
            </Router>
        </Provider>
    );
};

export default App;