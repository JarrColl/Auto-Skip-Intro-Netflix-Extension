console.log("SkipIntro Initialised");

//window.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.getElementsByClassName("PlayerControlsNeo__layout")[0] || document;
    console.log(targetNode);
    // /PlayerControlsNeo__layout
    let observer = new MutationObserver((mutations) => {
        for(let mutation of mutations)
        {
            if (mutation.type === 'childList') {
                console.log('A child node has been added or removed.');
                for(let node of mutation.addedNodes)
                {
                    if(node.classList.contains("skip-credits"))
                    {
                        console.log("Skipped Intro");
                        node.getElementsByTagName("a")[0].click();
                    }
                }
            }
        }
    });
    
    observer.observe(targetNode, {childList: true, subtree: true});
//}, false);
