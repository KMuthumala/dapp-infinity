import {Row} from "react-bootstrap";
import PriceCardSmall from "../price-card-small/price-card-small";
import './price-line.css';
import React, {useCallback, useEffect, useState} from 'react';
import useWebSocket, {ReadyState} from 'react-use-websocket';

function PriceLine() {
    const [ethPrice, setEthPrice] = useState(0.0);
    const [ethOpenPrice, setEthOpenPrice] = useState(0.0);

    const [btcPrice, setBtcPrice] = useState(0.0);
    const [btcOpenPrice, setBtcOpenPrice] = useState(0.0);

    const [bnbPrice, setBnbPrice] = useState(0.0);
    const [bnbOpenPrice, setBnbOpenPrice] = useState(0.0);

    const [adaPrice, setAdaPrice] = useState(0.0);
    const [adaOpenPrice, setAdaOpenPrice] = useState(0.0);

    const [dogePrice, setDogePrice] = useState(0.0);
    const [dogeOpenPrice, setDogeOpenPrice] = useState(0.0);

    const [dotPrice, setDotPrice] = useState(0.0);
    const [dotOpenPrice, setDotOpenPrice] = useState(0.0);

    const [maticPrice, setMaticPrice] = useState(0.0);
    const [maticOpenPrice, setMaticOpenPrice] = useState(0.0);

    const [solPrice, setSolPrice] = useState(0.0);
    const [solOpenPrice, setSolOpenPrice] = useState(0.0);

    const [xrpPrice, setXrpPrice] = useState(0.0);
    const [xrpOpenPrice, setXrpOpenPrice] = useState(0.0);

    const [trxPrice, setTrxPrice] = useState(0.0);
    const [trxOpenPrice, setTrxOpenPrice] = useState(0.0);

    // const [ethPrice, setEthPrice] = useState(0);
    // const [ethPrice, setEthPrice] = useState(0);

    const [socketUrl, setSocketUrl] = useState('wss://stream.binance.com:9443/stream');
    const {sendJsonMessage, lastMessage, readyState} = useWebSocket(socketUrl);
    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    function lastPriceExtractor(tempPriceObject: any): number {
        return parseFloat(parseFloat(tempPriceObject?.data?.c !== undefined ? tempPriceObject?.data?.c : "0.0").toFixed(2));
    }

    function openPriceExtractor(tempPriceObject: any): number {
        return parseFloat(parseFloat(tempPriceObject?.data?.o !== undefined ? tempPriceObject?.data?.o : "0.0").toFixed(2));
    }

    const handleClickSendMessageEth = useCallback(
        () =>
            sendJsonMessage({
                method: 'SUBSCRIBE',
                // @ts-ignore
                params: ["ethusdt@ticker", "btcusdt@ticker", "bnbusdt@ticker", "adausdt@ticker", "dogeusdt@ticker", "dotusdt@ticker", "maticusdt@ticker", "solusdt@ticker", "xrpusdt@ticker", "trxusdt@ticker"],
                id: 1,
            },),
        [sendJsonMessage],
    );

    useEffect(() => {
        let tempPriceObject = JSON.parse(lastMessage?.data !== undefined ? lastMessage?.data : "{}");
        if (tempPriceObject?.stream === 'ethusdt@ticker') {
            setEthPrice(lastPriceExtractor(tempPriceObject));
            setEthOpenPrice(openPriceExtractor(tempPriceObject));
        } else if (tempPriceObject?.stream === 'btcusdt@ticker') {
            setBtcPrice(lastPriceExtractor(tempPriceObject));
            setBtcOpenPrice(openPriceExtractor(tempPriceObject));
        } else if (tempPriceObject?.stream === 'bnbusdt@ticker') {
            setBnbPrice(lastPriceExtractor(tempPriceObject));
            setBnbOpenPrice(openPriceExtractor(tempPriceObject));
        } else if (tempPriceObject?.stream === 'adausdt@ticker') {
            setAdaPrice(lastPriceExtractor(tempPriceObject));
            setAdaOpenPrice(openPriceExtractor(tempPriceObject));
        } else if (tempPriceObject?.stream === 'dogeusdt@ticker') {
            setDogePrice(lastPriceExtractor(tempPriceObject));
            setDogeOpenPrice(openPriceExtractor(tempPriceObject));
        } else if (tempPriceObject?.stream === 'dotusdt@ticker') {
            setDotPrice(lastPriceExtractor(tempPriceObject));
            setDotOpenPrice(openPriceExtractor(tempPriceObject));
        } else if (tempPriceObject?.stream === 'maticusdt@ticker') {
            setMaticPrice(lastPriceExtractor(tempPriceObject));
            setMaticOpenPrice(openPriceExtractor(tempPriceObject));
        } else if (tempPriceObject?.stream === 'solusdt@ticker') {
            setSolPrice(lastPriceExtractor(tempPriceObject));
            setSolOpenPrice(openPriceExtractor(tempPriceObject));
        } else if (tempPriceObject?.stream === 'xrpusdt@ticker') {
            setXrpPrice(lastPriceExtractor(tempPriceObject));
            setXrpOpenPrice(openPriceExtractor(tempPriceObject));
        } else if (tempPriceObject?.stream === 'trxusdt@ticker') {
            setTrxPrice(lastPriceExtractor(tempPriceObject));
            setTrxOpenPrice(openPriceExtractor(tempPriceObject));
        }

    }, [lastMessage]);

    useEffect(() => {
        handleClickSendMessageEth();
    }, []);


    return (
        <div className={"price-line"}>
            <Row xs={2} sm={2} md={4} lg={5}>
                <PriceCardSmall title={"BTC"} image={"btc"} description={""} lastPrice={btcPrice}
                                openPrice={btcOpenPrice}/>
                <PriceCardSmall title={"ETH"} image={"eth"} description={""} lastPrice={ethPrice}
                                openPrice={ethOpenPrice}/>
                <PriceCardSmall title={"BNB"} image={"bnb"} description={""} lastPrice={bnbPrice}
                                openPrice={bnbOpenPrice}/>
                <PriceCardSmall title={"ADA"} image={"ada"} description={""} lastPrice={adaPrice}
                                openPrice={adaOpenPrice}/>
                <PriceCardSmall title={"DOGE"} image={"doge"} description={""} lastPrice={dogePrice}
                                openPrice={dogeOpenPrice}/>

                <PriceCardSmall title={"DOT"} image={"dot"} description={""} lastPrice={dotPrice}
                                openPrice={dotOpenPrice}/>
                <PriceCardSmall title={"MATIC"} image={"matic"} description={""} lastPrice={maticPrice}
                                openPrice={maticOpenPrice}/>
                <PriceCardSmall title={"SOL"} image={"sol"} description={""} lastPrice={solPrice}
                                openPrice={solOpenPrice}/>
                <PriceCardSmall title={"XRP"} image={"xrp"} description={""} lastPrice={xrpPrice}
                                openPrice={xrpOpenPrice}/>
                <PriceCardSmall title={"TRX"} image={"trx"} description={""} lastPrice={trxPrice}
                                openPrice={trxOpenPrice}/>
            </Row>
        </div>
    );

}

export default PriceLine;