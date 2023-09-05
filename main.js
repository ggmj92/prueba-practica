document.addEventListener("DOMContentLoaded", () => {
const pokeBox = document.createElement('#pokeBox');

const searchBtn = document.getElementById("#searchBtn");


const urlBase = "https://pokeapi.co/api/v2/pokemon/"

const display = async (urlBase) => {

    try {

        const resp = await fetch(`${urlBase}/${url}`, {
            method: 'GET',
        })

        if (resp.ok) {
            const datos = await resp.json()
            return {
                ok: true,
                datos
            };
        } else {
            throw ("Error. Pokemon not found.");
        }

    } catch (error) {
        return {
            ok: false,
            datos: error
        };

    }

};

const displayAll = async (url) => {
    console.log(url);
    const { ok, data } = await look (urlBase)
    console.log(data)

    if (ok) {
        const section = document.getElementById('pokeBox')
        section
        const cmpname = document.createElement('P')
        const cmpid = document.createElement('P')
        const cmptype = document.createElement('P')
        cmpname.textContent = data.name;
        cmpid.textContent = data.id;
        cmptype.textContent = data.type;

        cmpname.append(data.name);
        cmpid.append(data.id);
        cmptype.append(data.type);

    } else {
        console.log(ok);
    }
}

displayAll()

}) //LOAD