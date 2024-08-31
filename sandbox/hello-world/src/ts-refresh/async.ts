const asyncFunc = async() => ":wave:";

const myPromiseString = asyncFunc();

const myWrapperFunction = async () => {
    const myResolvedPromiseString = await asyncFunc();

    console.log(myResolvedPromiseString.length);
}