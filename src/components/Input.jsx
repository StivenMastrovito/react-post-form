export default function Input({ formDate, type, name, aggiornaForm, className}) {
    const control = typeof formDate === "string";
    let infoValue = ""
    let infoChecked = ""
    control ? infoValue = formDate : infoChecked = formDate
    let label = name === "title" ? "Titolo:" : (name === "author" ? "Autore:" : (name === "body" ? "Descrizione: " : "Vuoi pubblicarlo online? "))
    
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input className={className} required={control} type={type} name={name} id={name} value={infoValue} checked={infoChecked}  onChange={aggiornaForm} />
        </>
    )
}