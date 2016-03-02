STYLE GUIDELINES

We will be using SASS instead of raw CSS - this will make it easier for us to do our styling because SASS supports creating VARIABLES! I will update this file with some guidelines for how we can organize our SASS files to make it easier for everyone to stay consistent.

COLORS

We want everyone to use the same colors throughout the site. We will have a separate file that contain all of the colors - this file can be imported into any other SASS file. Make sure your colors have descriptive names that indicate their functionality.

example: 
$nav-text: 		#FEFEFE
$body-subtitle:		$333333
$gradient-pink: 	#XXXXXX
$gradient-purple: 	$YYYYYY


CLASSES VS ID

A good rule of thumb is to ALWAYS use classes when you want to style something in CSS. They are much more flexible because an item can contain more than one class AND multiple objects can contain the same class. 

A good rule of thumb is to use ID when you want to target something in Javascript -- it's simpler because selecting by ID returns a single object in JS, while selecting by class returns a list of objects (even if there is only one object with that class)

If you need to target an element both in CSS and JS, use BOTH class and ID in your HTML.

USING !important

You'll ALMOST NEVER need to use the css property !important. This property overrides any value inherited in CSS. If you find yourself needing to use !important, you should probably try to change the code somewhere else so you don't run into those problems.

CSS SELECTORS 

Use your best judgment to determine how specific to make your CSS selectors. If you're styling something that will be reused, consider styling a more general class.

Let's say you have the following structure:

<code>
	div
		p class="content"
	end div
</code>

If the content class above is reused often, it would be better to select css as follows:

<code>
.content {
	...
}
</code>

rather than

<code>
div .content {
	...
} 
</code>

The latter only targets the content class when it's contained within a div (which might not always be the case). This is one of the most common sources of error with CSS.
