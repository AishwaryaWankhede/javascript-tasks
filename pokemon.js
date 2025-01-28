document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            // Set the Pokémon data
            document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
            document.getElementById('pokemon-id').textContent = `#${data.id}`;
            document.getElementById('weight').textContent = `Weight: ${data.weight}`;
            document.getElementById('height').textContent = `Height: ${data.height}`;
            document.getElementById('hp').textContent = data.stats[0].base_stat;
            document.getElementById('attack').textContent = data.stats[1].base_stat;
            document.getElementById('defense').textContent = data.stats[2].base_stat;
            document.getElementById('special-attack').textContent = data.stats[3].base_stat;
            document.getElementById('special-defense').textContent = data.stats[4].base_stat;
            document.getElementById('speed').textContent = data.stats[5].base_stat;

            // Clear and set the Pokémon types
            const typesElement = document.getElementById('types');
            typesElement.innerHTML = '';
            data.types.forEach(typeInfo => {
                const typeElement = document.createElement('div');
                typeElement.textContent = typeInfo.type.name.toUpperCase();
                typesElement.appendChild(typeElement);
            });

            // Set the sprite image
            const spriteElement = document.getElementById('sprite');
            spriteElement.src = data.sprites.front_default;
            spriteElement.alt = data.name;
        })
        .catch(error => {
            alert(error.message);
            document.querySelectorAll('.pokemon-info p').forEach(element => {
                element.textContent = '';
            });
            document.getElementById('pokemon-name').textContent = '';
            document.getElementById('sprite').src = '';
            document.getElementById('types').innerHTML = '';
        });
});