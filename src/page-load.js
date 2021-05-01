const renderTacos = () => {

    const html = `

    <img src="../images/taco-cart.jpg" />
    <h1>El Gringo's MEXICAN Tacos</h1>
    <div>On my daytrip to Tijuana via San Diego, my friend and I followed in the footsteps of Anthony Bourdain and visited Las Ahumaderas, nicknamed in the English-speaking world as Taco Alley.   Somewhat hidden on the side street of Avenida Guillermo Prieto, Taco Alley is known for its 5 to 6 taco stands located all in a row.
      We didn’t see much differentiation between each stand, so our plan was to start at the first stand, and eat a different item from each vendor.  Each stall has various meats (beef, chorizo, pork, etc.) sizzling on a grill.
    </div>`;

    const contentDiv = document.querySelector('div#content');
    contentDiv.innerHTML = html;
    console.log('fire');
};

export default renderTacos;