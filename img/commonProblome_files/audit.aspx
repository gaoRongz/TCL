(function(){var message='We detected ad blocker enabled';var tryMessage='';})(); function readCookie(name){var nameEQ=name+'=';var ca=document.cookie.split(';');for(var i = 0; i < ca.length; i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0){var cokfulval=c.substring(nameEQ.length,c.length);return cokfulval}} return null} function readCookiedata(cokfulval,name){var nameEQ=name+'=';var ca=cokfulval.split('&');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0){var cokfulval=c.substring(nameEQ.length,c.length);return cokfulval}} return null} function Setadblock(adblockval){var coknewval;var str1=readCookie('fingerprint');if(str1 != null){var str2=readCookiedata(str1,'isadblock');if(str2==null){coknewval=str1 + '&isadblock='+adblockval} else{coknewval=str1.replace('&isadblock=0','&isadblock='+adblockval).replace('&isadblock=1','&isadblock='+adblockval)}}} var tick='SPyAhDNhttp%3a%2f%2fwww.tcl.com%2ftv%2f3130d103ed86494193c0b57d4df13291';