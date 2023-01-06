const Wiki = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 py-4 min-h-full">
      <h1 className="text-white font-extrabold text-3xl text-center p-4 mb-14">Wiki</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 grid-rows-4 justify-items-stretch gap-4 text-white text-2xl text-center h-full">
            <div className="box border-2 rounded-2xl col-span-1 md:col-span-2">
                <div
                    className="cursor-pointer rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
                    <div className="content-card w-full relative hover:opacity-80 transition-all duration-500 ease-in-out h-[270px]">
                        <img src="https://cdn.vox-cdn.com/thumbor/9uzysqQG30oPn7BVYkmLr3uaeuo=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24055256/226317_Mechanical_Keyboard_Buying_Guide_JPorter_0001.jpg" alt=""
                        className="h-full object-cover w-full rounded-2xl"/>
                        <p className="absolute left-0 bottom-0 rounded-bl-2xl text-2xl font-bold bg-gray-600/50 shadow-2xl p-4">What is mechanical keyboard?</p>
                    </div>
                </div>
            </div>

            <div className="box border-2 rounded-2xl row-span-1 md:row-span-2">
                <div
                    className="cursor-pointer rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
                    <div className="content-card w-full relative hover:opacity-80   transition-all duration-500 ease-in-out h-[560px]">
                        <img src="http://cdn.shopify.com/s/files/1/0582/0242/3501/collections/switches-657317.png?v=1648553632" alt=""
                             className="h-full object-cover w-full rounded-2xl"/>
                        <p className="absolute left-0 bottom-0 rounded-b-2xl text-2xl font-bold bg-gray-600/50 shadow-2xl p-4">What kind of switches exists?</p>
                    </div>
                </div>
            </div>
            <div className="box border-2 row-span-1 md:row-span-2">3</div>
            <div className="box border-2 col-span-1 md:col-span-2">4</div>
            <div className="box border-2 row-span-1 md:row-span-2">5</div>
            <div className="box border-2 row-span-1 md:row-span-2">6</div>
            <div className="box border-2 col-span-1 md:col-span-2">7</div>
            <div className="box border-2 col-span-1 md:col-span-2">8</div>

        </div>


        {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 justify-items-center gap-4">*/}
        {/*    <div className="bg-gray-600/40 hover:bg-gray-600/80 cursor-pointer w-80 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">*/}
        {/*        <div className="relative mt-2 mx-2">*/}
        {/*            <div className="h-56 rounded-xl overflow-hidden">*/}
        {/*                <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" className="object-cover w-full h-full;" alt="" />*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="py-6 w-full px-4">*/}
        {/*            <h1 className="font-medium leading-none text-base tracking-wider text-white">Lorem ipsuim adjha ajk hdajksdh jkahdjk  sdfsdfs sf sfd</h1>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="bg-gray-600/40 hover:bg-gray-600/80 cursor-pointer w-80 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">*/}
        {/*        <div className="relative mt-2 mx-2">*/}
        {/*            <div className="h-56 rounded-xl overflow-hidden">*/}
        {/*                <img src="https://img.freepik.com/premium-vector/modern-grey-keyboard-minimalistic-keyboard-with-black-buttons-realistic-grey-color-computer-bluetooth-keyboard-white-background-vector-illustration_399089-3491.jpg?w=2000" className="object-cover w-full h-full;" alt="" />*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="py-6 w-full px-4">*/}
        {/*            <h1 className="font-medium leading-none text-base tracking-wider text-white">Title</h1>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="bg-gray-600/40 hover:bg-gray-600/80 cursor-pointer w-80 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">*/}
        {/*        <div className="relative mt-2 mx-2">*/}
        {/*            <div className="h-56 rounded-xl overflow-hidden">*/}
        {/*                <img src="https://img.freepik.com/premium-vector/modern-grey-keyboard-minimalistic-keyboard-with-black-buttons-realistic-grey-color-computer-bluetooth-keyboard-white-background-vector-illustration_399089-3491.jpg?w=2000" className="object-cover w-full h-full;" alt="" />*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="py-6 w-full px-4">*/}
        {/*            <h1 className="font-medium leading-none text-base tracking-wider text-white">Title</h1>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="bg-gray-600/40 hover:bg-gray-600/80 cursor-pointer w-80 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">*/}
        {/*        <div className="relative mt-2 mx-2">*/}
        {/*            <div className="h-56 rounded-xl overflow-hidden">*/}
        {/*                <img src="https://img.freepik.com/premium-vector/modern-grey-keyboard-minimalistic-keyboard-with-black-buttons-realistic-grey-color-computer-bluetooth-keyboard-white-background-vector-illustration_399089-3491.jpg?w=2000" className="object-cover w-full h-full;" alt="" />*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="py-6 w-full px-4">*/}
        {/*            <h1 className="font-medium leading-none text-base tracking-wider text-white">Title</h1>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="bg-gray-600/40 hover:bg-gray-600/80 cursor-pointer w-80 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">*/}
        {/*        <div className="relative mt-2 mx-2">*/}
        {/*            <div className="h-56 rounded-xl overflow-hidden">*/}
        {/*                <img src="https://img.freepik.com/premium-vector/modern-grey-keyboard-minimalistic-keyboard-with-black-buttons-realistic-grey-color-computer-bluetooth-keyboard-white-background-vector-illustration_399089-3491.jpg?w=2000" className="object-cover w-full h-full;" alt="" />*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="py-6 w-full px-4">*/}
        {/*            <h1 className="font-medium leading-none text-base tracking-wider text-white">Title</h1>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}



      {/*<h1 className="text-white font-bold text-3xl mb-4" id={'what-is'}>*/}
      {/*  What is a mechanical keyboard?*/}
      {/*</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 mb-2">*/}
      {/*  Mechanical keyboards derive their name from the mechanical switches used in each key. Most*/}
      {/*  other standalone keyboards use rubber domes to suspend their keycaps and carbon pads to*/}
      {/*  complete the circuit when you press a key. This setup (which mirrors a TV remote button) can*/}
      {/*  feel mushy and imprecise to type on, and can wear out relatively quickly. Mechanical*/}
      {/*  keyboards replace those domes with a metal spring and those pads with a metal leaf. A*/}
      {/*  precision made plastic stem rides on the spring and closes the circuit by pushing the*/}
      {/*  flexible leaf. This provides a more precise feel as well as greater longevity. It also*/}
      {/*  allows for extremely customizable switch parameters, including spring weight, actuation*/}
      {/*  point, tactile feedback, and more.{' '}*/}
      {/*</p>*/}
      {/*<img*/}
      {/*  src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/howtochooseacustommechanicalkeyboard--edited-1651117829800.jpg?v=1651117834"*/}
      {/*  alt=""*/}
      {/*/>*/}
      {/*<br />*/}
      {/*<h1 className="text-white font-bold text-3xl mb-4" id={'parts-of'}>*/}
      {/*  Parts of a mechanical keyboard*/}
      {/*</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 mb-2">*/}
      {/*  You can read about them along this page*/}
      {/*</p>*/}
      {/*<img*/}
      {/*  src="https://techwithtech.com/wp-content/uploads/parts-of-a-mechanical-keyboard.png"*/}
      {/*  alt=""*/}
      {/*  className="mx-auto"*/}
      {/*/>*/}

      {/*<h1 className="text-white font-bold text-3xl mb-4 mt-8">What is a switch?</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16">*/}
      {/*  A switch is the part of a mechanical keyboard that registers a keypress. It is made up of a*/}
      {/*  spring, a leaf, and a stem. The spring is what provides the resistance when you press a key.*/}
      {/*  The leaf is what completes the circuit when you press a key. The stem is what rides on the*/}
      {/*  spring and pushes the leaf down.{' '}*/}
      {/*</p>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16">We have 3 types of switches:</p>*/}
      {/*<ul className="text-white font-bold list-disc ml-8 my-4">*/}
      {/*  <li>Linear — they have linear motion, straight up and down</li>*/}
      {/*  <li>*/}
      {/*    Tactile — they give you a nudge in the middle of the travel to let you know that the key*/}
      {/*    press has registered*/}
      {/*  </li>*/}
      {/*  <li>Clicky — basically, they are tactile switches that have a click</li>*/}
      {/*</ul>*/}
      {/*<img*/}
      {/*  src="https://thumbs.gfycat.com/AshamedLoathsomeGoldeneye-size_restricted.gif"*/}
      {/*  alt=""*/}
      {/*  className="mx-auto"*/}
      {/*/>*/}

      {/*<h1 className="text-white font-bold text-3xl mb-4 mt-8">What is a keycap?</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 my-4">*/}
      {/*  A keycap is the part of a mechanical keyboard that you press. It is made up of a plastic*/}
      {/*  base and a plastic top. The base is what holds the switch in place. The top is what you*/}
      {/*  press. They can be different shaped, we call it profiles. The most common profiles are*/}
      {/*  Cherry and OEM, below you can see differences between them*/}
      {/*</p>*/}
      {/*<img src="https://golem.hu/pic/keycap-profiles.jpg" alt="" className="mx-auto" />*/}

      {/*<h1 className="text-white font-bold text-3xl mb-4 mt-8">What is a PCB?</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16">*/}
      {/*  A PCB is the part of a mechanical keyboard that connects the switches to the computer. It is*/}
      {/*  made up of a plastic base and a plastic top. The base is what holds the switches in place.*/}
      {/*  The top is what connects to the computer. There is 2 types of PCBs:{' '}*/}
      {/*</p>*/}
      {/*<ul className="text-white font-bold list-disc ml-8 my-4">*/}
      {/*  <li>Hotswap PCB — you just push your switches into sockets</li>*/}
      {/*  <li>Solder PCB — you need to solder switch pins</li>*/}
      {/*</ul>*/}
      {/*<img*/}
      {/*  src="https://nextrift.com/wp-content/uploads/2021/02/kbdfans-kbd67-lite-review-2.jpg"*/}
      {/*  alt=""*/}
      {/*/>*/}

      {/*<h1 className="text-white font-bold text-3xl mb-4 mt-8">What is a plate?</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16">*/}
      {/*  A plate is the part of a mechanical keyboard that holds the switches in place. It is made up*/}
      {/*  of a metal base and a plastic top. The base is what holds the switches in place. The top is*/}
      {/*  what holds the PCB in place. They can be done from different materials, but usually you see*/}
      {/*  these ones:*/}
      {/*</p>*/}
      {/*<ul className="text-white font-bold list-disc ml-8 my-4">*/}
      {/*  <li>Aluminum</li>*/}
      {/*  <li>Brass</li>*/}
      {/*  <li>Steel</li>*/}
      {/*  <li>FR4</li>*/}
      {/*  <li>POM</li>*/}
      {/*  <li>Polycarbonate</li>*/}
      {/*  <li>Carbon fiber</li>*/}
      {/*</ul>*/}
      {/*<img src="https://i.ytimg.com/vi/ZoaqGhaU-RE/maxresdefault.jpg" alt="" />*/}

      {/*<h1 className="text-white font-bold text-3xl mb-4 mt-8">What is a case?</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 mb-2">*/}
      {/*  A case is the part of a mechanical keyboard that holds the PCB and plate in place. It is*/}
      {/*  made up of a plastic base and a plastic top. The base is what holds the plate in place. The*/}
      {/*  top is what holds the keycaps in place.{' '}*/}
      {/*</p>*/}
      {/*<img*/}
      {/*  src="https://cdn.shopify.com/s/files/1/0266/4444/7276/products/id80v2_1860x.jpg?v=1631141542"*/}
      {/*  alt=""*/}
      {/*/>*/}

      {/*<h1 className="text-white font-bold text-3xl mb-4 mt-8">What is a stabilizer?</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 mb-2">*/}
      {/*  A stabilizer is the part of a mechanical keyboard that holds the keycap in place and make*/}
      {/*  long keycaps stable when you press them. It is made up of a plastic base and a plastic top.*/}
      {/*  The base is what holds the keycap in place. The top is what holds the switch in place.{' '}*/}
      {/*</p>*/}
      {/*<img*/}
      {/*  src="https://images.squarespace-cdn.com/content/v1/563c788ae4b099120ae219e2/1530288072162-Y2GCX6RYSB6232I55UB3/STAB.gif"*/}
      {/*  alt=""*/}
      {/*  className="mx-auto"*/}
      {/*/>*/}

      {/*<h1 className="text-white font-bold text-3xl mb-4 mt-8">Keyboard sizes</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 mb-2">*/}
      {/*  The first thing to determine is what size keyboard you want.*/}
      {/*</p>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 my-4">*/}
      {/*  You may consider a smaller keyboard if you have limited desk space, want extra room for your*/}
      {/*  mouse, need something portable, or just prefer a cleaner look. Some enthusiasts claim that a*/}
      {/*  smaller keyboard helps provide a more ergonomic fit because you can keep your arms closer to*/}
      {/*  your body while using all the keys.*/}
      {/*</p>*/}
      {/*<img src="https://i.redd.it/ud7n9lsng4c81.jpg" alt="" className="mx-auto" />*/}

      {/*<h1 className="text-white font-bold text-3xl mb-4 mt-8">What are ANSI and ISO?</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 mb-2">*/}
      {/*  The two most common standardized layouts are ANSI (American National Standards Institute)*/}
      {/*  and ISO (International Organization for Standardization).*/}
      {/*</p>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 my-4">*/}
      {/*  ANSI is what most US readers will be familiar with, recognizable by its rectangular Enter*/}
      {/*  key aligned with the home row. Meanwhile, ISO uses a taller, narrower Enter key that spans*/}
      {/*  the home and QWERTY rows. Most circuit boards support one or the other layouts, while some*/}
      {/*  rarer models support both by offering additional soldering points for multiple switch*/}
      {/*  configurations.*/}
      {/*</p>*/}
      {/*<img*/}
      {/*  src="http://cdn.shopify.com/s/files/1/0579/7183/5079/articles/ansi_VS_iso_rev_3.jpg?v=1647866819"*/}
      {/*  alt=""*/}
      {/*/>*/}

      {/*<h1 className="text-white font-bold text-3xl mb-4 mt-8">What is a firmware?</h1>*/}
      {/*<p className="text-white font-medium text-lg mr-2 md:mr-16 mb-2">*/}
      {/*  One of the advantages of mechanical keyboards is that you can configure them and change*/}
      {/*  binds, use macros and etc. You either have company's unified software or open source*/}
      {/*  software like QMK or VIA where you can do everything you want*/}
      {/*</p>*/}
      {/*<img*/}
      {/*  src="https://d33wubrfki0l68.cloudfront.net/7f617bb767b7eb57a15a1d19fa89c76a2b73a5e3/4c038/assets/images/01-keymap-default-screen-879d8cc3df05452c8f4abc9e934f9e24.png"*/}
      {/*  alt=""*/}
      {/*/>*/}
    </div>
  );
};

export { Wiki };
