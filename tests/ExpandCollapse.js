const ExpandCollapse = require('../src/index.js');

describe('ExpandCollapse', function() {

  beforeAll(function(done) {
    // Add expand collapse element
    var el = $('<details><summary>Untitled Title</summary><p>Untitled Body</p></details>');
    $(document.body).append(el)

    console.log('Constructing the Expandable..');
    theExpandable = new ExpandCollapse({
      el: el
    });

		theTitle = el.find('summary');
    theBody = theTitle.siblings();

    isOpen = function() {
      return theBody.is(':visible')
    }

    var el = $('<div><summary>Shim Untitled Title</summary><p>Untitled Body</p></div>');
    $(document.body).append(el);
    theShimedExpandable = new ExpandCollapse({
      forceShim: true,
      el: el
    });

    setTimeout(function() {
      // Wait a bit before performing tests on all the constructed elements.
      done()
    }, 100)
  });

  it('should hide content intially', function() {
    expect(theExpandable.isOpen()).toBe(false);
  });

	// Attempting to test toggling on click. Might there be other gestures you need to test other than click?
	it('should show content on click', function(done) {
    // Click
    theTitle.trigger('click');

    window.setTimeout(function() {
      expect(theExpandable.isOpen()).toBe(true);
      done();
    }, 10)

	});

  it('should hide content on second click', function(done) {
    // Click
    theTitle.trigger('click');

    window.setTimeout(function() {
      expect(theExpandable.isOpen()).toBe(false);
      done();
    }, 10)

	});

  it('should show content on open attribute', function() {
    theExpandable.el[0].setAttribute('open', 'open')
    expect(theExpandable.isOpen()).toBe(true);
	});

  // Fails in IE10 because removing attributes doesn't trigger the ATTR modified event as it should https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings-mutationevents
  it('should hide content without open attribute', function() {
    console.log('Removing open attribute..')
    theExpandable.el[0].removeAttribute('open');
		expect(theExpandable.isOpen()).toBe(false, 'Removed attribute but it was still open');

	});

  it('should hide content intially (using shim)', function(done) {

    // Wait a beat for construction
    window.setTimeout(function() {
      expect(theShimedExpandable.isOpen()).toBe(false);
      done();
    }, 10)
  })

  it('should show content on click (using shim)', function(done) {
    theShimedExpandable.el.find('summary').trigger('click')

    // Wait a beat for construction
    window.setTimeout(function() {
      expect(theShimedExpandable.isOpen()).toBe(true);
      done();
    }, 10)
  })

  it('should show content on click (using shim)', function(done) {
    theShimedExpandable.el.find('summary').trigger('click')

    // Wait a beat for construction
    window.setTimeout(function() {
      expect(theShimedExpandable.isOpen()).toBe(false);
      done();
    }, 10)
  })

	// Does this case matter?
  xit('should hide content with open attribute set to false', function() {
    console.log('Setting open attribute to false..')
    el[0].setAttribute('open', false)
		expect(isOpen()).toBe(false, 'Setting open attribute to false but it was still open');


	});

});
