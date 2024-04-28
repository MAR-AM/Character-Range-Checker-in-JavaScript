function func1(ch){
            if(ch.charAt(0) >= "a" && ch.charAt(0) <= "d" || ch.charAt(0) >= "A" && ch.charAt(0) <= "D"){
                document.write(true);
            }
            else{
                document.write(false);
            }
        }
        ch="briem"
        func1(ch)
