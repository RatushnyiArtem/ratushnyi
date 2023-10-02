$(document).ready(function (){
    if(!$("#myCanva").tagcanvas({
        textColour: "white",
        outlineColour: "transparent",
        maxSpeed: 0.05,
        weight: true,
        textFont: 'Space Grotesk'
    }, "tags")){
        $("#mySphere");
    }
})
const wrapper = document.querySelector('.blog-slider')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})
let setting = document.getElementById('setting')
let splash = document.querySelector('.menu-splash')
let body = document.querySelector('body')
let cross = document.getElementById('cross')
setting.addEventListener('click', splasher)
function splasher(){
  splash.classList.add('open')
}
cross.addEventListener('click', cancel)
function cancel(){
  splash.classList.remove('open')
}
let theme_change = document.querySelector('.themest')
let orange = document.getElementById('orange')
let blue = document.getElementById('blue')
let purple = document.getElementById('purple')
let yellow = document.getElementById('yellow')
let cyan = document.getElementById('cyan')
let red = document.getElementById('red')
// let logo_classic = document.querySelector('.classic')
let logo_orange = document.querySelector('.r_orange')
let orange_change = document.querySelector('.alternative-style1')
let orange_texting = document.querySelector('.orange_classifiction')
let classic_texting = document.querySelector('.classich')
let blue_change = document.querySelector('.alternative-style2')
let logo_blue = document.querySelector('.r_blue')
let violet_change = document.querySelector('.alternative-style3')
let logo_violet = document.querySelector('.r_violet')
let yellow_change = document.querySelector('.alternative-style4')
let cyan_change = document.querySelector('.alternative-style5')
let red_change = document.querySelector('.alternative-style6')
let logo_red = document.querySelector('.r_red')
let logo_yellow = document.querySelector('.r_yellow')
let logo_cyan = document.querySelector('.r_cyan')
let violet_texting = document.querySelector('.violet_classifiction')
let blue_texting = document.querySelector('.blue_classifiction')
let yellow_texting = document.querySelector('.yellow_classifiction')
let cyan_texting = document.querySelector('.cyan_classifiction')
let red_texting = document.querySelector('.red_classifiction')
let rat_classic = document.querySelector('.classic_logo')
let rat_dark = document.querySelector('.dark_logo')
let rat_orange = document.querySelector('.orange_logo')
let rat_purple = document.querySelector('.purple_logo')
let rat_blue = document.querySelector('.blue_logo')
let rat_yellow = document.querySelector('.yellow_logo')
let rat_cyan = document.querySelector('.cyan_logo')
let rat_red = document.querySelector('.red_logo')
let light_theme = document.querySelector('.light-template')
let dark_theme = document.querySelector('.dark-template')
let logo_dark = document.querySelector('.dark_classic')
let logo_classic = document.querySelector('.classic')
let darken = document.querySelector('.darkstyle')
let canva = document.getElementById('myCanva')
let dark_texting = document.querySelector('.r_dark')
light_theme.addEventListener('click', switch_light)
function switch_light(){
  light_theme.classList.add('on')
  theme_change.classList.replace('dark', 'light')
  dark_theme.classList.remove('on')
  darken.classList.add('stylist')
  darken.removeAttribute('disabled')
  dark_texting.style.display = 'inline'
  classic_texting.style.display = 'none'
  rat_classic.style.display = 'none'
  rat_dark.style.display = 'block'
  $(document).ready(function (){
    if(!$("#myCanva").tagcanvas({
        textColour: "#333333",
        outlineColour: "transparent",
        maxSpeed: 0.05,
        weight: true,
        textFont: 'Space Grotesk'
    }, "tags")){
        $("#mySphere");
    }
})
  
  if(orange_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#FD792F",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else if(violet_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#915CEB",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else if(blue_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#74B6D2",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else if(yellow_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#F1E132",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else if(cyan_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#08FDD8",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else if(red_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#FD0834",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else{
    logo_classic.style.display = 'none'
    logo_dark.style.display = 'block' 
    dark_texting.style.display = 'inline'
    classic_texting.style.display = 'none' 
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'block'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#333333",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  }
}
dark_theme.addEventListener('click', switch_dark)
function switch_dark(){
  light_theme.classList.remove('on')
  dark_theme.classList.add('on')
  theme_change.classList.replace('light', 'dark')
  darken.classList.remove('stylist')
  darken.setAttribute('disabled', 'true')
  dark_texting.style.display = 'none'
  classic_texting.style.display = 'inline'
  rat_classic.style.display = 'block'
  rat_dark.style.display = 'none'
  $(document).ready(function (){
    if(!$("#myCanva").tagcanvas({
        textColour: "white",
        outlineColour: "transparent",
        maxSpeed: 0.05,
        weight: true,
        textFont: 'Space Grotesk'
    }, "tags")){
        $("#mySphere");
    }
})

  if(orange_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#FD792F",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })    
  } else if(violet_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#915CEB",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else if(blue_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#74B6D2",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else if(yellow_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#F1E132",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else if(cyan_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#08FDD8",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
  } else if(red_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#FD0834",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
} else{
    logo_classic.style.display = 'block'
    logo_dark.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'inline'
    rat_classic.style.display = 'block'
    rat_dark.style.display = 'none'
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "white",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  

}
}
orange.addEventListener('click',change_logo)
  function change_logo(){
  if(orange_change.classList.contains('stylist')){
    orange_change.classList.remove('stylist')
    orange_change.setAttribute('disabled', 'true')
    logo_orange.style.display = 'none';
    if(theme_change.classList.contains('dark')){
      logo_classic.style.display = 'block';
      dark_texting.style.display = 'none'
      classic_texting.style.display = 'inline'
      rat_classic.style.display = 'block'
      rat_dark.style.display = 'none'
      $(document).ready(function (){
        if(!$("#myCanva").tagcanvas({
            textColour: "white",
            outlineColour: "transparent",
            maxSpeed: 0.05,
            weight: true,
            textFont: 'Space Grotesk'
        }, "tags")){
            $("#mySphere");
        }
    })    
    } else{
      logo_classic.style.display = 'none';
      logo_dark.style.display = 'block'
      dark_texting.style.display = 'inline'
      classic_texting.style.display = 'none'
      rat_classic.style.display = 'none'
      rat_dark.style.display = 'block'
      $(document).ready(function (){
        if(!$("#myCanva").tagcanvas({
            textColour: "#333333",
            outlineColour: "transparent",
            maxSpeed: 0.05,
            weight: true,
            textFont: 'Space Grotesk'
        }, "tags")){
            $("#mySphere");
        }
    })    
    }
    orange_texting.style.display = 'none'
    rat_orange.style.display = 'none'
  } 
   else{
    red_change.classList.remove('stylist')
    red_change.setAttribute('disabled', 'true')
    logo_red.style.display = 'none'
    red_texting.style.display = 'none'
    cyan_change.classList.remove('stylist')
    cyan_change.setAttribute('disabled', 'true')
    logo_cyan.style.display = 'none'
    cyan_texting.style.display = 'none'
    yellow_change.classList.remove('stylist')
    yellow_change.setAttribute('disabled', 'true')
    logo_yellow.style.display = 'none'
    yellow_texting.style.display = 'none'
    violet_change.classList.remove('stylist')
    violet_change.setAttribute('disabled', 'true')
    logo_violet.style.display = 'none'
    violet_texting.style.display = 'none'
    blue_change.setAttribute('disabled', 'true')
    logo_blue.style.display = 'none'
    blue_change.classList.remove('stylist')
    blue_texting.style.display = 'none'
    orange_change.classList.add('stylist')
    orange_change.removeAttribute('disabled')
    logo_orange.style.display = 'block';
    $(document).ready(function (){
      if(!$("#myCanva").tagcanvas({
          textColour: "#FD792F",
          outlineColour: "transparent",
          maxSpeed: 0.05,
          weight: true,
          textFont: 'Space Grotesk'
      }, "tags")){
          $("#mySphere");
      }
  })  
    if(theme_change.classList.contains('dark')){
      logo_classic.style.display = 'none';
    } else{
      logo_classic.style.display = 'none';
      logo_dark.style.display = 'none'
    }
    orange_texting.style.display = 'inline'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
    rat_orange.style.display = 'inline'
    rat_purple.style.display = 'none'
    rat_blue.style.display = 'none'
    rat_yellow.style.display = 'none'
    rat_cyan.style.display = 'none'
    rat_red.style.display = 'none'
    dark_texting.style.display = 'none'    
    
  }
}
  blue.addEventListener('click', change_blue)
  function change_blue(){
    orange_texting.style.display = 'none'
    if(blue_change.classList.contains('stylist')){
      blue_change.classList.remove('stylist')
      blue_change.setAttribute('disabled', 'true')
      logo_blue.style.display = 'none';
      if(theme_change.classList.contains('dark')){
        logo_classic.style.display = 'block';
        dark_texting.style.display = 'none'
        classic_texting.style.display = 'inline'
        rat_classic.style.display = 'block'
        rat_dark.style.display = 'none'
        $(document).ready(function (){
          if(!$("#myCanva").tagcanvas({
              textColour: "white",
              outlineColour: "transparent",
              maxSpeed: 0.05,
              weight: true,
              textFont: 'Space Grotesk'
          }, "tags")){
              $("#mySphere");
          }
      })  
    
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'block'
        dark_texting.style.display = 'inline'
        classic_texting.style.display = 'none'
        rat_classic.style.display = 'none'
        rat_dark.style.display = 'block'
        $(document).ready(function (){
          if(!$("#myCanva").tagcanvas({
              textColour: "#333333",
              outlineColour: "transparent",
              maxSpeed: 0.05,
              weight: true,
              textFont: 'Space Grotesk'
          }, "tags")){
              $("#mySphere");
          }
      })  
    
      }      
      orange_texting.style.display = 'none'
      blue_texting.style.display = 'none'
      rat_blue.style.display = 'none'
  
    
    }
     else{
      red_change.classList.remove('stylist')
      red_change.setAttribute('disabled', 'true')
      red_texting.style.display = 'none'
      logo_red.style.display = 'none'
      cyan_change.classList.remove('stylist')
      cyan_change.setAttribute('disabled', 'true')
      logo_cyan.style.display = 'none'  
      cyan_texting.style.display = 'none'
      yellow_change.classList.remove('stylist')
      yellow_change.setAttribute('disabled', 'true')
      logo_yellow.style.display = 'none'
      yellow_texting.style.display = 'none'
      logo_violet.style.display = 'none'
      violet_change.classList.remove('stylist')
      violet_change.setAttribute('disabled', 'true')
      violet_texting.style.display = 'none'
      orange_change.setAttribute('disabled', 'true')
      logo_orange.style.display = 'none'
      orange_change.classList.remove('stylist')
      blue_change.classList.add('stylist')
      blue_change.removeAttribute('disabled')
      blue_texting.style.display = 'inline'
      $(document).ready(function (){
        if(!$("#myCanva").tagcanvas({
            textColour: "#74B6D2",
            outlineColour: "transparent",
            maxSpeed: 0.05,
            weight: true,
            textFont: 'Space Grotesk'
        }, "tags")){
            $("#mySphere");
        }
    })  
  
      logo_blue.style.display = 'block';
      if(theme_change.classList.contains('dark')){
        logo_classic.style.display = 'none';
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'none'
      }
      orange_texting.style.display = 'none'
      classic_texting.style.display = 'none'
      rat_classic.style.display = 'none'
      rat_dark.style.display = 'none'
      rat_orange.style.display = 'none'
      rat_purple.style.display = 'none'
      rat_blue.style.display = 'inline'
      rat_yellow.style.display = 'none'
      rat_cyan.style.display = 'none'
      rat_red.style.display = 'none' 
      dark_texting.style.display = 'none'   
    }  
  }
  purple.addEventListener('click', change_purple)
  function change_purple(){
    orange_texting.style.display = 'none'
    if(violet_change.classList.contains('stylist')){
      violet_change.classList.remove('stylist')
      violet_change.setAttribute('disabled', 'true')
      logo_violet.style.display = 'none'
      if(theme_change.classList.contains('dark')){
        logo_classic.style.display = 'block';
        dark_texting.style.display = 'none'
        classic_texting.style.display = 'inline'
        rat_classic.style.display = 'block'
        rat_dark.style.display = 'none'
        $(document).ready(function (){
          if(!$("#myCanva").tagcanvas({
              textColour: "white",
              outlineColour: "transparent",
              maxSpeed: 0.05,
              weight: true,
              textFont: 'Space Grotesk'
          }, "tags")){
              $("#mySphere");
          }
      })      
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'block'
        dark_texting.style.display = 'inline'
        classic_texting.style.display = 'none'
        rat_classic.style.display = 'none'
        rat_dark.style.display = 'block'
        $(document).ready(function (){
          if(!$("#myCanva").tagcanvas({
              textColour: "#333333",
              outlineColour: "transparent",
              maxSpeed: 0.05,
              weight: true,
              textFont: 'Space Grotesk'
          }, "tags")){
              $("#mySphere");
          }
      })      
      }      
      violet_texting.style.display = 'none'
      rat_purple.style.display = 'none'
    }
     else{
      red_change.classList.remove('stylist')
      red_change.setAttribute('disabled', 'true')
      red_texting.style.display = 'none'
      logo_red.style.display = 'none'
      cyan_change.classList.remove('stylist')
      cyan_change.setAttribute('disabled', 'true')
      logo_cyan.style.display = 'none'  
      cyan_texting.style.display = 'none'
      yellow_change.classList.remove('stylist')
      yellow_change.setAttribute('disabled', 'true')
      logo_yellow.style.display = 'none'
      yellow_texting.style.display = 'none'
      blue_change.setAttribute('disabled', 'true')
      logo_blue.style.display = 'none'
      blue_change.classList.remove('stylist')
      blue_texting.style.display = 'none'
      orange_change.setAttribute('disabled', 'true')
      logo_orange.style.display = 'none'
      orange_change.classList.remove('stylist')
      orange_texting.style.display = 'none'
      violet_change.classList.add('stylist')
      violet_change.removeAttribute('disabled')
      $(document).ready(function (){
        if(!$("#myCanva").tagcanvas({
            textColour: "#915CEB",
            outlineColour: "transparent",
            maxSpeed: 0.05,
            weight: true,
            textFont: 'Space Grotesk'
        }, "tags")){
            $("#mySphere");
        }
    })    
      if(theme_change.classList.contains('dark')){
        logo_classic.style.display = 'none';
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'none'
      }
      logo_violet.style.display = 'block'
      violet_texting.style.display = 'inline'
      classic_texting.style.display = 'none'
      rat_classic.style.display = 'none'
      rat_dark.style.display = 'none'
      rat_orange.style.display = 'none'
      rat_purple.style.display = 'inline'
      rat_blue.style.display = 'none'
      rat_yellow.style.display = 'none'
      rat_cyan.style.display = 'none'
      rat_red.style.display = 'none' 
      dark_texting.style.display = 'none'

    }  
  }
  yellow.addEventListener('click', change_yellow)
  function change_yellow(){
    orange_texting.style.display = 'none'
    if(yellow_change.classList.contains('stylist')){
      yellow_change.classList.remove('stylist')
      yellow_change.setAttribute('disabled', 'true')
      logo_yellow.style.display = 'none'
      if(theme_change.classList.contains('dark')){
        logo_classic.style.display = 'block';
        dark_texting.style.display = 'none'
        classic_texting.style.display = 'inline'
        rat_classic.style.display = 'block'
        rat_dark.style.display = 'none'
        $(document).ready(function (){
          if(!$("#myCanva").tagcanvas({
              textColour: "white",
              outlineColour: "transparent",
              maxSpeed: 0.05,
              weight: true,
              textFont: 'Space Grotesk'
          }, "tags")){
              $("#mySphere");
          }
      })      
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'block'
        dark_texting.style.display = 'inline'
        classic_texting.style.display = 'none'
        rat_classic.style.display = 'none'
        rat_dark.style.display = 'block'
        $(document).ready(function (){
          if(!$("#myCanva").tagcanvas({
              textColour: "#333333",
              outlineColour: "transparent",
              maxSpeed: 0.05,
              weight: true,
              textFont: 'Space Grotesk'
          }, "tags")){
              $("#mySphere");
          }
      })     
      }      
      orange_texting.style.display = 'none'
      yellow_texting.style.display = 'none'
      rat_yellow.style.display = 'none'
  
    }
     else{
      red_change.classList.remove('stylist')
      red_change.setAttribute('disabled', 'true')
      red_texting.style.display = 'none'
      logo_red.style.display = 'none'
      cyan_change.classList.remove('stylist')
      cyan_change.setAttribute('disabled', 'true')
      logo_cyan.style.display = 'none'  
      cyan_texting.style.display = 'none'
      blue_change.setAttribute('disabled', 'true')
      logo_blue.style.display = 'none'
      blue_change.classList.remove('stylist')
      blue_texting.style.display = 'none'
      orange_change.setAttribute('disabled', 'true')
      logo_orange.style.display = 'none'
      orange_change.classList.remove('stylist')
      orange_texting.style.display = 'none'
      logo_violet.style.display = 'none'
      violet_change.classList.remove('stylist')
      violet_change.setAttribute('disabled', 'true')
      violet_texting.style.display = 'none'
      $(document).ready(function (){
        if(!$("#myCanva").tagcanvas({
            textColour: "#F1E132",
            outlineColour: "transparent",
            maxSpeed: 0.05,
            weight: true,
            textFont: 'Space Grotesk'
        }, "tags")){
            $("#mySphere");
        }
    })    
      if(theme_change.classList.contains('dark')){
        logo_classic.style.display = 'none';
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'none'
      }
      yellow_change.classList.add('stylist')
      yellow_change.removeAttribute('disabled')
      logo_yellow.style.display = 'block'
      yellow_texting.style.display = 'inline'
      classic_texting.style.display = 'none'
      rat_classic.style.display = 'none'
      rat_dark.style.display = 'none'
      rat_orange.style.display = 'none'
      rat_purple.style.display = 'none'
      rat_blue.style.display = 'none'
      rat_yellow.style.display = 'inline'
      rat_cyan.style.display = 'none'
      rat_red.style.display = 'none'
      dark_texting.style.display = 'none'

      
    }  
  }
  cyan.addEventListener('click', change_cyan)
  function change_cyan(){
    orange_texting.style.display = 'none'
    if(cyan_change.classList.contains('stylist')){
      cyan_change.classList.remove('stylist')
      cyan_change.setAttribute('disabled', 'true')
      logo_yellow.style.display = 'none'
      if(theme_change.classList.contains('dark')){
        logo_classic.style.display = 'block';
        dark_texting.style.display = 'none'
        classic_texting.style.display = 'inline'
        rat_classic.style.display = 'block'
        rat_dark.style.display = 'none'
        $(document).ready(function (){
          if(!$("#myCanva").tagcanvas({
              textColour: "white",
              outlineColour: "transparent",
              maxSpeed: 0.05,
              weight: true,
              textFont: 'Space Grotesk'
          }, "tags")){
              $("#mySphere");
          }
      })      
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'block'
        dark_texting.style.display = 'inline'
        classic_texting.style.display = 'none'
        rat_classic.style.display = 'none'
        rat_dark.style.display = 'block'
        $(document).ready(function (){
          if(!$("#myCanva").tagcanvas({
              textColour: "#333333",
              outlineColour: "transparent",
              maxSpeed: 0.05,
              weight: true,
              textFont: 'Space Grotesk'
          }, "tags")){
              $("#mySphere");
          }
      })      
      }      
      orange_texting.style.display = 'none'
      logo_cyan.style.display = 'none'  
      cyan_texting.style.display = 'none'
      rat_cyan.style.display = 'none'
    }
     else{
      red_change.classList.remove('stylist')
      red_change.setAttribute('disabled', 'true')
      red_texting.style.display = 'none'
      logo_red.style.display = 'none'
      cyan_change.classList.add('stylist')
      cyan_change.removeAttribute('disabled')
      cyan_texting.style.display = 'inline'
      logo_cyan.style.display = 'block'  
      blue_change.setAttribute('disabled', 'true')
      logo_blue.style.display = 'none'
      blue_change.classList.remove('stylist')
      blue_texting.style.display = 'none'
      orange_change.setAttribute('disabled', 'true')
      logo_orange.style.display = 'none'
      orange_change.classList.remove('stylist')
      orange_texting.style.display = 'none'
      logo_violet.style.display = 'none'
      violet_change.classList.remove('stylist')
      violet_change.setAttribute('disabled', 'true')
      violet_texting.style.display = 'none'
      $(document).ready(function (){
        if(!$("#myCanva").tagcanvas({
            textColour: "#08FDD8",
            outlineColour: "transparent",
            maxSpeed: 0.05,
            weight: true,
            textFont: 'Space Grotesk'
        }, "tags")){
            $("#mySphere");
        }
    })    
      if(theme_change.classList.contains('dark')){
        logo_classic.style.display = 'none';
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'none'
      }
      yellow_change.classList.remove('stylist')
      yellow_change.setAttribute('disabled', 'true')
      logo_yellow.style.display = 'none'
      classic_texting.style.display = 'none'
      yellow_texting.style.display = 'none'
      rat_classic.style.display = 'none'
      rat_dark.style.display = 'none'
      rat_orange.style.display = 'none'
      rat_purple.style.display = 'none'
      rat_blue.style.display = 'none'
      rat_yellow.style.display = 'none'
      rat_cyan.style.display = 'inline'
      rat_red.style.display = 'none'
      dark_texting.style.display = 'none'

      
    }  
  }

  red.addEventListener('click', change_red)
  function change_red(){
    orange_texting.style.display = 'none'
    if(red_change.classList.contains('stylist')){
      red_change.classList.remove('stylist')
      red_change.setAttribute('disabled', 'true')
    if(theme_change.classList.contains('dark')){
      logo_classic.style.display = 'block';
      dark_texting.style.display = 'none'
      classic_texting.style.display = 'inline'
      rat_classic.style.display = 'block'
      rat_dark.style.display = 'none'
      $(document).ready(function (){
        if(!$("#myCanva").tagcanvas({
            textColour: "white",
            outlineColour: "transparent",
            maxSpeed: 0.05,
            weight: true,
            textFont: 'Space Grotesk'
        }, "tags")){
            $("#mySphere");
        }
    })    
    } else{
      logo_classic.style.display = 'none';
      logo_dark.style.display = 'block'
      dark_texting.style.display = 'inline'
      classic_texting.style.display = 'none'
      rat_classic.style.display = 'none'
      rat_dark.style.display = 'block'
      $(document).ready(function (){
        if(!$("#myCanva").tagcanvas({
            textColour: "#333333",
            outlineColour: "transparent",
            maxSpeed: 0.05,
            weight: true,
            textFont: 'Space Grotesk'
        }, "tags")){
            $("#mySphere");
        }
    })    
    }
      orange_texting.style.display = 'none'
      logo_red.style.display = 'none'
      red_texting.style.display = 'none'
      rat_red.style.display = 'none'
    }
     else{
      red_change.classList.add('stylist')
      red_change.removeAttribute('disabled')
      logo_red.style.display = 'block'
      red_texting.style.display = 'inline'
      cyan_change.classList.remove('stylist')
      cyan_change.setAttribute('disabled', 'true')
      logo_cyan.style.display = 'none'  
      cyan_texting.style.display = 'none'
      blue_change.setAttribute('disabled', 'true')
      logo_blue.style.display = 'none'
      blue_change.classList.remove('stylist')
      blue_texting.style.display = 'none'
      orange_change.setAttribute('disabled', 'true')
      logo_orange.style.display = 'none'
      orange_change.classList.remove('stylist')
      orange_texting.style.display = 'none'
      logo_violet.style.display = 'none'
      violet_change.classList.remove('stylist')
      violet_change.setAttribute('disabled', 'true')
      violet_texting.style.display = 'none'
      $(document).ready(function (){
        if(!$("#myCanva").tagcanvas({
            textColour: "#FD0834",
            outlineColour: "transparent",
            maxSpeed: 0.05,
            weight: true,
            textFont: 'Space Grotesk'
        }, "tags")){
            $("#mySphere");
        }
    })    
      if(theme_change.classList.contains('dark')){
        logo_classic.style.display = 'none';
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'none'
      }
      yellow_change.classList.remove('stylist')
      yellow_change.setAttribute('disabled', 'true')
      logo_yellow.style.display = 'none'
      yellow_texting.style.display = 'none'
      classic_texting.style.display = 'none'
      rat_classic.style.display = 'none'
      rat_dark.style.display = 'none'
      rat_orange.style.display = 'none'
      rat_purple.style.display = 'none'
      rat_blue.style.display = 'none'
      rat_yellow.style.display = 'none'
      rat_cyan.style.display = 'none'
      rat_red.style.display = 'inline'
      dark_texting.style.display = 'none'

      
    }  
  }


// let newStyles = document.querySelectorAll('.alternative-style')
// function setColor (color) {
//   newStyles.forEach((style) => {
//     if(color === style.getAttribute("title")) {
//       style.removeAttribute("disabled")
//     }
//     else{
//       style.setAttribute('disabled', 'true')
//     }
//   })
// }
// let newStyles = [document.querySelectorAll('.alternative-style')]
// console.log(newStyles.title)
const scroller = document.querySelector('.portfolio-projects')

let isDown = false;
let startF;
let scrollLeft;

scroller.addEventListener('mousedown', (e) => {
  isDown = true;
  scroller.classList.add('active');
  startF = e.pageX - scroller.offsetLeft;
  scrollLeft = scroller.scrollLeft;
});
scroller.addEventListener('mouseleave', () => {
  isDown = false;
  scroller.classList.remove('active');
});
scroller.addEventListener('mouseup', () => {
  isDown = false;
  scroller.classList.remove('active');
});
scroller.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - scroller.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  scroller.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


