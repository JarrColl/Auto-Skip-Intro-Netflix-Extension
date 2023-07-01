//TODO: differentiate between recap, intro. menu to enable/disable skipping of each. Skip next episode.
console.log("SkipIntro Initialised");

var skipIntro = true;
var skipRecap = true;



let observer = new MutationObserver((mutations) => {
    for(let mutation of mutations)
    {
        if (mutation.type === 'childList') {
            //console.log('A child node has been added or removed.');
            for(let node of mutation.addedNodes)
            {
                ///console.log(node);

                //watch-video--skip-content ltr-hpbgml

                //button-primary watch-video--skip-content-button medium hasLabel ltr-ublg01
                //data-uia = player-skip-intro

                //button-primary watch-video--skip-content-button medium hasLabel ltr-ublg01
                //data-uia = player-skip-recap

                var buttons = node.getElementsByTagName("button");
                //if(node.classList.contains("ltr-16tr625")||node.classList.contains("watch-video--skip-content"))
                if(buttons)
                {
                    //var subNode = node.getElementsByClassName("watch-video--skip-content")[0] || node;
                    
                    //var buttons = node.getElementsByTagName("button");
                    var button;
                    for(let i = 0; i < buttons.length; i++)
                    {
                        if(buttons[i].classList.contains("watch-video--skip-content-button"))
                        {
                            button = buttons[i];

                            if(skipIntro && button.getAttribute("data-uia") == "player-skip-intro")
                            {
                                button.click();
                            }
                            else if(skipRecap && button.getAttribute("data-uia") == "player-skip-recap")
                            {
                                button.click();
                            }
                            //else if(skipRecap && skipIntro)
                            //{
                            //    button.click();
                            //}
                        }
                    }
                }
            }
        }
    }
});

const targetNode = document;
console.log(targetNode);

observer.observe(targetNode, {childList: true, subtree: true});
