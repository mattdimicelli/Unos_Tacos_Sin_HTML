const renderMainPage = () => {
  const html = `

    <img src="../images/taco-cart.jpg" />
    <h1>El Gringo's MEXICAN Tacos</h1>
    <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet arcu nisl. Cras lorem mauris, efficitur at dapibus sit amet, porta ut justo. Nulla rhoncus ex sapien, at cursus eros bibendum eget. Curabitur tortor lectus, ultrices sit amet purus vitae, ultricies tempor sem. Nam molestie nisl ut tempor tincidunt. Morbi lacinia a ligula bibendum rutrum. Proin a ligula eu sem blandit vulputate. Integer tempus ipsum ac libero finibus faucibus. Fusce purus augue, posuere nec leo sit amet, fermentum venenatis tortor. Etiam pharetra posuere ante, eget aliquet augue tincidunt vel. Nulla tristique elit odio, quis bibendum nibh pulvinar eget. Suspendisse et imperdiet velit. Aliquam vestibulum est neque, ac lobortis erat finibus quis. Pellentesque porttitor nunc eget enim egestas, vel commodo nunc efficitur. Aliquam vitae dolor congue, fringilla nisi id, mollis neque. Maecenas a hendrerit nibh.</p>
    <p>Nulla quis libero vel nibh euismod porttitor. Sed volutpat varius diam, convallis suscipit lectus. Maecenas in laoreet leo. Etiam scelerisque, purus et bibendum cursus, libero neque placerat elit, vitae finibus lectus purus a elit. Phasellus non libero sed orci vestibulum aliquam. Donec mi mauris, ultrices eget odio sed, euismod consectetur dolor. Integer id ex quis tortor commodo scelerisque ac non nisl. Morbi convallis lorem nunc, rhoncus commodo enim finibus sit amet. Curabitur ullamcorper lorem quis sagittis accumsan. Cras vel velit tempor, venenatis velit elementum, egestas dolor. Mauris risus dui, pretium ac finibus a, semper bibendum velit. Pellentesque vel ultrices lectus. Praesent ut magna varius, fermentum lectus sit amet, molestie ligula. Nam id feugiat ligula. Suspendisse a dolor in nisi vehicula bland</p>
    </div>`;

  const contentDiv = document.querySelector("div#content");
  contentDiv.innerHTML = html;
};

export default renderMainPage;
