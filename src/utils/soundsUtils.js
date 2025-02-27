import clickSound from '../assets/audio/click.mp3';
import { toast } from 'react-toastify';

export class SoundsUtils {
    constructor() {
        this.click = new Audio(clickSound);
    }

    playClick() {
        this.click.currentTime = 0;
        this.click
            .play()
            .catch((error) => toast.erro('Erro ao reproduzir o som: ', error));
    }
}
