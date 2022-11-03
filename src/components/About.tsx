function About() {

    return (
        <div className="w-full max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 xl:px-0 text-white my-8">
                <div className="col-span-1 relative">
                    <img src="https://cdn.shopify.com/s/files/1/0238/7342/1376/products/DSC_7562.png?v=1666911980" alt="about" className="p-4 w-full h-full object-cover"/>
                    <h1 className="absolute top-8 left-8 font-extrabold text-4xl">ABOUT US</h1>
                </div>
                <div className="col-span-2 py-8">
                    <hr className="w-48 h-1 bg-white rounded border-0"/>
                    <h1 className="py-10 text-xl">
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </h1>
                </div>
            </div>
        </div>

    )
}

export default About
