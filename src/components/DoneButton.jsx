export default function DoneButton({ onHandleFilters }) {
    return (
        <button className="cssbuttons-io-button" id="reset" onClick={onHandleFilters}>
            Aplicar
            <div className="iconDone">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 304L96 384 96 80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48l16 0 0 128 448 0 0-128 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96z" /></svg>
            </div>
        </button>
    )
}