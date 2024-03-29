let prodList = document.getElementById("cartProdsList");
let cartId = document.getElementById("cartId").value;
const getMyCart = async () => {
    const result = await fetch('http://localhost:3000/api/carts/' + cartId);
    const data = await result.json();
    const cart = data.products.map(p => {
        const cartProduct = document.createElement('li');
        let totalPrice = p.product.price * p.quantity;
        cartProduct.innerHTML = `<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div class="flex w-full space-x-2 sm:space-x-4">
            <img class="flex-shrink-0 object-cover w-20 h-20
                dark:border-transparent rounded outline-none sm:w-32
                sm:h-32 dark:bg-gray-500"
                src=${p.product.thumbnail}
                alt="#">
            <div class="flex flex-col justify-between w-full pb-4">
                <div class="flex justify-between w-full pb-2 space-x-2">
                    <div class="space-y-1">
                        <h3 class="text-lg font-semibold leading-snug sm:pr-8">${p.product.title}</h3>
                        <p class="text-sm dark:text-gray-400">Unit price: <span>$${p.product.price}</span></p>
                        <p class="text-sm dark:text-gray-400">Quantity: <span>${p.quantity}</span> units</p>
                    </div>
                    <div class="text-right">
                        <p class="text-lg font-semibold">$${totalPrice}</p>
                    </div>
                </div>
                <div class="flex text-sm divide-x">
                    <button type="button" class="flex items-center px-2
                        py-1 pl-0 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512" class="w-4 h-4
                            fill-current">
                            <path
                                d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect width="32" height="200" x="168"
                                y="216"></rect>
                            <rect width="32" height="200" x="240"
                                y="216"></rect>
                            <rect width="32" height="200" x="312"
                                y="216"></rect>
                            <path
                                d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                    </button>
                </div>
            </div>
        </div>
    </li>`;
    prodList.appendChild(cartProduct);
    })

    return data;
}

getMyCart();