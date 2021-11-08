import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

export function Header({ title }) {
    return (
        <IonHeader className="grid-header">
            <IonToolbar className="grid-toolbar">
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}
