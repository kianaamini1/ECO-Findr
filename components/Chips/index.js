import styles from './cards.modules.css'

export default function Chip(buttonText) {
    return (
        <button type="submit" class="chip-card">
            {buttonText}
        </button>
    )
}