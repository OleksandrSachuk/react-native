import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import TopRepos from './components/top-repos';
import DetailedRepo from './components/detailed-repo';

const App = () => {
    return (
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
    );
};

export default App;