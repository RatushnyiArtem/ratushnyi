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

  
  if(orange_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
 
  } else if(violet_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'

  } else if(blue_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'

  } else if(yellow_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'

  } else if(cyan_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
 
  } else if(red_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
  
  } else{
    logo_classic.style.display = 'none'
    logo_dark.style.display = 'block' 
    dark_texting.style.display = 'inline'
    classic_texting.style.display = 'none' 
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'block'
 
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


  if(orange_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
   
  } else if(violet_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'

  } else if(blue_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'

  } else if(yellow_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'

  } else if(cyan_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'
  
  } else if(red_change.classList.contains('stylist')){
    logo_dark.style.display = 'none'
    logo_classic.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'none'
    rat_classic.style.display = 'none'
    rat_dark.style.display = 'none'

} else{
    logo_classic.style.display = 'block'
    logo_dark.style.display = 'none'
    dark_texting.style.display = 'none'
    classic_texting.style.display = 'inline'
    rat_classic.style.display = 'block'
    rat_dark.style.display = 'none' 
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
    
    } else{
      logo_classic.style.display = 'none';
      logo_dark.style.display = 'block'
      dark_texting.style.display = 'inline'
      classic_texting.style.display = 'none'
      rat_classic.style.display = 'none'
      rat_dark.style.display = 'block'
    
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
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'block'
        dark_texting.style.display = 'inline'
        classic_texting.style.display = 'none'
        rat_classic.style.display = 'none'
        rat_dark.style.display = 'block' 
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
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'block'
        dark_texting.style.display = 'inline'
        classic_texting.style.display = 'none'
        rat_classic.style.display = 'none'
        rat_dark.style.display = 'block'     
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

      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'block'
        dark_texting.style.display = 'inline'
        classic_texting.style.display = 'none'
        rat_classic.style.display = 'none'
        rat_dark.style.display = 'block'

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
     
      } else{
        logo_classic.style.display = 'none';
        logo_dark.style.display = 'block'
        dark_texting.style.display = 'inline'
        classic_texting.style.display = 'none'
        rat_classic.style.display = 'none'
        rat_dark.style.display = 'block'

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

    } else{
      logo_classic.style.display = 'none';
      logo_dark.style.display = 'block'
      dark_texting.style.display = 'inline'
      classic_texting.style.display = 'none'
      rat_classic.style.display = 'none'
      rat_dark.style.display = 'block'
   
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
  $(document).ready(function() {
    let page = document.querySelector('.page')
    let preloader = document.querySelector('.preloader')
     let percent = document.getElementById('percentage')      
     let starone = document.querySelector(".starone") 
     let startwo = document.querySelector(".startwo")
     let starthree = document.querySelector('.starthree');
     let starfour = document.querySelector(".starfour");
     let starfive = document.querySelector('.starfive')
     let starsixth = document.querySelector('.starsix')
     let starseven = document.querySelector('.starseven')
     let stareight = document.querySelector('.stareight')
     let starnine = document.querySelector('.starnine')
     let starten = document.querySelector('.starten')
     let stareleven = document.querySelector('.stareleven')
     let startwelve = document.querySelector('.startwelve')
    let count = 0;
    let counter = setInterval(function() {

        if(count < 101) {
            $(percent).text(count + '%');
            if (count < 9){
                starone.classList.add('active');
            }
            if (count < 18 && count>9){
                startwo.classList.add('active')
            }
            if (count < 27 && count>18){
                starthree.classList.add('active')
            }
            if (count < 36 && count > 27){
                starfour.classList.add('active')
            }
            if (count < 45 && count > 36){
                starfive.classList.add('active')
            }
            if (count < 54 && count > 45){
                starsixth.classList.add('active')
            }
            if(count > 54 && count < 63){
                starseven.classList.add('active')
            }
            if(count > 63 && count < 72){
                stareight.classList.add('active')
            }
            if(count>72 && count<81){
                starnine.classList.add('active')
            }
            if(count>81 && count<90){
                starten.classList.add('active')
            }
            if(count>90 && count<99){
                stareleven.classList.add('active')
            }
            else{
                startwelve.classList.add('active')
            }

            count++
            if (count == 100){
                preloader.classList.add('active')
                page.classList.add("ready")
            }
        }

    }, 20)
    
});

gsap.to('.preloader', 1, {
    delay: 2,
    y: "-100%",
    ease: Expo.EaseInOut
});

let SeeMore = document.querySelector(".whatmore")
let BlockRating = document.querySelector('.skills-rating')


SeeMore.addEventListener('click', function(){
  SeeMore.style.display = 'none';
  BlockRating.classList.add('active')
})

let MoreMore = document.querySelector('.whatsmore')


MoreMore.addEventListener('click', function(){
  BlockRating.classList.remove('active')
  BlockRating.classList.add('activate')
  MoreMore.style.display = 'none'
})
let GoingBack = document.querySelector('.overmore')
GoingBack.addEventListener('click', function(){
  BlockRating.classList.remove('activate')
  SeeMore.style.display = 'block'
  MoreMore.style.display = 'block'
})
// let skill = document.querySelectorAll('.skill').length;
// console.log(skill)
const animItems = document.querySelectorAll('._anim-items')
let preloader = document.querySelector('.preloader')
let condition  = preloader.classList.contains("active")
if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight = animItemHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else {
                if(!animItem.classList.contains('_anim-no-hide'))
                animItem.classList.remove('active')
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    setTimeout(() => {
        animOnScroll();
    }, 500);
    
}
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["WEB DEVELOPER", "UI/UX DESIGNER"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 350);
});