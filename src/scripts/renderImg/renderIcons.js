
export class AddImgs {
    #varClassDom;
    #varUrlImg;

    constructor(domVariavel, imgURL) {
        this.#varClassDom = domVariavel;
        this.#varUrlImg = imgURL;
        this.ini();
    }
    ini() {
        this.upLoadImgs();
    }

    upLoadImgs() {
        this.#varClassDom.src = this.#varUrlImg
    }
}







