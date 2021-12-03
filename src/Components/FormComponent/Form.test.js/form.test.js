import {render, screen} from "@testing-library/react";
import {MessForm} from "../Form";

describe('form test',()=>{
    it('Button text', ()=>{
        render(<MessForm btnText = {'Отправить'}/>)

       const btnTxt = screen.getByText("Отправить")
        expect(btnTxt).toBeInTheDocument()
    })

    it('Input placeholder text', ()=>{
        render(<MessForm inputPlaceText = {"Введите сообщение"}/>)

        const placeholderText = screen.getByPlaceholderText("Введите сообщение")
        expect(placeholderText).toBeInTheDocument()
    })
})