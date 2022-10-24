import {Row} from "react-bootstrap";
import PriceCardSmall from "../price-card-small/price-card-small";
import './price-line.css';

function PriceLine() {

    return (
        <div className={"price-line"}>
            <Row xs={2} sm={2} md={4} lg={5}>
                <PriceCardSmall title={"BTC-USDT"} image={"btc"} description={""} price={13456}/>
                <PriceCardSmall title={"ETH-USDT"} image={"eth"} description={""} price={13456}/>
                <PriceCardSmall title={"BNB-USDT"} image={"bnb"} description={""} price={13456}/>
                <PriceCardSmall title={"ADA-USDT"} image={"ada"} description={""} price={13456}/>
                <PriceCardSmall title={"DOGE-USDT"} image={"doge"} description={""} price={13456}/>

                <PriceCardSmall title={"DOT-USDT"} image={"dot"} description={""} price={13456}/>
                <PriceCardSmall title={"MATIC-USDT"} image={"matic"} description={""} price={13456}/>
                <PriceCardSmall title={"SOL-USDT"} image={"sol"} description={""} price={13456}/>
                <PriceCardSmall title={"XRP-USDT"} image={"xrp"} description={""} price={13456}/>
                <PriceCardSmall title={"TRX-USDT"} image={"trx"} description={""} price={13456}/>
            </Row>
        </div>
    );

}

export default PriceLine;