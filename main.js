
function scrollToTop() {
    Element.prototype.documentOffsetTop = function () {
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
    };

    var top = document.getElementById( 'info' ).documentOffsetTop() - ( window.innerHeight / 2 );
    window.scrollTo( 0, top+90 );
}


