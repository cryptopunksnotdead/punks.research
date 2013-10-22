
// jquery.tabs.js

var tabs_new = function( tabs_id, opts ) {

    // use module pattern (see JavaScript - The Good Parts)

    function _debug( msg )
    {
       if( window.console ) 
         console.log( "[debug] " + msg ); 
    }
    
    var $tabs,
        $tabsNav,
        $tabsPanels;

    var defaults = {
                background: '#f4f4f4',
                backgroundSelected: 'white'
              };

    var settings;
        
  function _init( tabs_id, opts )
  {
    // if( $.type( opts ) === 'undefined' )
    //  opts = {};
    
    settings = $.extend( {}, defaults, opts );
    
    // nb: will find w/ selector or wrap vanilla javascript this in jquery wrapped $(this)
    $tabs       = $( tabs_id );
    $tabsNav    = $tabs.children( 'ul' );    // note: ul must be child of tabs div
    $tabsPanels = $tabs.children( 'div' );  // all div children - note: divs must be child of tabs div
    
    $tabsNav.addClass( 'tabs-nav' );
    $tabsPanels.addClass( 'tabs-panel' );

/****************
.tabs-nav  {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
*********/

   $tabsNav.css( {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    } );

/*************************
.tabs-nav li {
  display: inline-block;
  padding: 5px 15px 3px 15px;   // top right bottom left
  margin: 0 5px 0 0;            // top right bottom left
  border: 1px solid #999;
  border-bottom: none;
  cursor: pointer;
}
****************/

    $tabsNav.find( 'li' ).css( {
      display: 'inline-block',
      margin: '0 5px 0 0',
      padding: '5px 15px 3px 15px',
      borderTop: '1px solid #999',
      borderLeft: '1px solid #999',
      borderRight: '1px solid #999',
      borderBottom: 'none',
      cursor: 'pointer',
      background: settings.background
    } );

/**********************
 .tabs-nav li {
  position: relative;
  top: 0;
}
**************/

    $tabsNav.find( 'li' ).css( {
      position: 'relative',
      top: 0
    } );


/***************************
.tabs-panel {
  border: 1px solid #999;
  padding: 10px;
}
 ******************/

    $tabsPanels.css( {
      padding: '10px',
      border: '1px solid #999'
    } );
    
    $tabsNav.find( 'li' ).each( function( tabIndex, tab ) {
       var $tab = $(tab);

       // when a tab gets clicked; add handler
       $tab.click( function() {
           _debug( "tabIndex:" + tabIndex );
           _select( tabIndex );
       });
    });

    // auto-select first tab on init/startup
    _select( 0 );


  } // function _init
  
  _init( tabs_id, opts );  

  
  function _select( index ) {
    // step 1) reset selected tab
    $tabsNav.children( 'li.tabs-selected' ).removeClass( 'tabs-selected' ).css( { top: 0,
                                                                                  background: settings.background });
    $tabsPanels.hide();

    // step 2) set new selected tab   

/***************
 .tabs-nav li.tabs-selected {
  position: relative;
  top: 1px;
}
****************/

    $tabsNav.children( 'li' ).eq( index ).addClass( 'tabs-selected' ).css( { top: '1px',
                                                                             background: settings.backgroundSelected }) ;
    $tabsPanels.eq( index ).show();
  }
  
    return {
      select: function( index ) {
        _select( index );
        return this;
      }
    };  
};



function tabify( tabs_id, opts ) {
  var tabs = tabs_new( tabs_id, opts );
  return tabs;
}
