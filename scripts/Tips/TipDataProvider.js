const tipsDataProvider = [
    {
     tip: "Clean poop out of water!",
    },
{
    tip: "Clean out dead fish.",
},
{
    tip: "Always check water quality",
}
]
// make function to export copy
export const UseTips = () =>{
    return tipsDataProvider.slice()
}
