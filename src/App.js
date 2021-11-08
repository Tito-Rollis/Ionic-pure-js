import './App.css';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// Pages
import { GridExample } from './pages/grid/Grid';
import { SlidesExample } from './pages/slide/slide';

function App() {
    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route path="/gridExample">
                            <GridExample />
                        </Route>
                        <Route exact path="/slideExample">
                            <SlidesExample />
                        </Route>
                        <Route path="/tab3"></Route>
                        <Route exact path="/">
                            <Redirect to="/gridExample" />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="gridExample" href="/gridExample">
                            <IonIcon icon={triangle} />
                            <IonLabel>Grid Example</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="slideExample" href="/slideExample">
                            <IonIcon icon={ellipse} />
                            <IonLabel>Slide Example</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab3" href="/tab3">
                            <IonIcon icon={square} />
                            <IonLabel>Tab 3</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
}

export default App;
