import { IonSlides, IonSlide, IonContent, IonPage } from '@ionic/react';
import './slide.css';
import { Header } from '../../components/header/header';
// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
    initialSlide: 1,
    speed: 600,
};

export const SlidesExample = () => (
    <IonPage>
        <Header title="Slide Example" />
        <IonContent>
            <IonSlides
                className="slides-content"
                pager={true}
                options={slideOpts}
            >
                <IonSlide>
                    <h1>Slide 1</h1>
                </IonSlide>
                <IonSlide>
                    <h1>Slide 2</h1>
                </IonSlide>
                <IonSlide>
                    <h1>Slide 3</h1>
                </IonSlide>
            </IonSlides>
        </IonContent>
    </IonPage>
);

export default SlidesExample;
