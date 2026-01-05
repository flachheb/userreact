export default function FormAdd(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.add({
            id: props.id,
            name : e.target.name.value,
            email : e.target.email.value,
            phone : e.target.phone.value
        })
    }

    return <form onSubmit={handleSubmit}>
        <label>
            Nom
            <input name="name" />
        </label>
        <label>
            Email
            <input name="email" />
        </label>
        <label>
            Télephone
            <input name="phone" />
        </label>
        <button type="submit">Enregistrer</button>
    </form>
}
