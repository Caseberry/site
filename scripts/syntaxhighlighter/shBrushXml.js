dp.sh.Brushes.Xml=function(){this.CssClass="dp-xml",this.Style=".dp-xml .cdata { color: #ff1493; }.dp-xml .tag, .dp-xml .tag-name { color: #069; font-weight: bold; }.dp-xml .attribute { color: red; }.dp-xml .attribute-value { color: blue; }"},dp.sh.Brushes.Xml.prototype=new dp.sh.Highlighter,dp.sh.Brushes.Xml.Aliases=["xml","xhtml","xslt","html","xhtml"],dp.sh.Brushes.Xml.prototype.ProcessRegexList=function(){function t(t,e){t[t.length]=e}var e=null,s=null;for(this.GetMatches(new RegExp("(&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](&gt;|>)","gm"),"cdata"),this.GetMatches(new RegExp("(&lt;|<)!--\\s*.*?\\s*--(&gt;|>)","gm"),"comments"),s=new RegExp("([:\\w-.]+)\\s*=\\s*(\".*?\"|'.*?'|\\w+)*|(\\w+)","gm");null!=(e=s.exec(this.code));)null!=e[1]&&(t(this.matches,new dp.sh.Match(e[1],e.index,"attribute")),e[2]!=undefined&&t(this.matches,new dp.sh.Match(e[2],e.index+e[0].indexOf(e[2]),"attribute-value")));for(this.GetMatches(new RegExp("(&lt;|<)/*\\?*(?!\\!)|/*\\?*(&gt;|>)","gm"),"tag"),s=new RegExp("(?:&lt;|<)/*\\?*\\s*([:\\w-.]+)","gm");null!=(e=s.exec(this.code));)t(this.matches,new dp.sh.Match(e[1],e.index+e[0].indexOf(e[1]),"tag-name"))};