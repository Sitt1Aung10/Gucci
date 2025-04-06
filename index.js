$(document).ready(function () {
    var body = $("body");
    //Navbar
    var header = $("<header>");
    header.attr("id","header")
    var navbar = $("<nav>");
    navbar.attr("class", "navbar");

    var contact = $("<button>");
    contact.text("Contact Us");
    contact.css({
        'cursor': "pointer",
        'border': "none",
        'background-color': "transparent"
    })

    var windowWidth = $(window).width();
    if(windowWidth < 768) {
        contact.css("display","none")
    }

    // var contactBox = $("<div>");
    //click event for contact
    // contact.click(function()
    //  {
    //     contactBox.css
    // });

    var logo = $("<h1>");
    logo.text("G U C C I")
    logo.attr("class", "logo");

    $(document).ready(function () {
        $(window).scroll(function () {
            var scrollPosition = $(window).scrollTop();
            var scrollHeight = 50;
            var windowWidth = $(window).width();

            if (windowWidth > 992) {
                if (scrollPosition > scrollHeight) {
                    logo.css({
                        "font-size": "2.5vw",
                        "top": "1vh",
                        "color": "black",
                        "letterSpacing": "10px"
                    });
                    navbar.css("background-color", "#fff");
                } else {
                    logo.css({
                        "font-size": "14vw",
                        "color": "#fff",
                    });
                    navbar.css("background-color", "transparent");
                };
            };
        });
    });
    const iconsList = [
        {
            id: "Bag",
            icon: "fa-solid fa-bag-shopping",
        },
        {
            id: "Profile",
            icon: "fa-solid fa-user",
        },
        {
            id: "Search",
            icon: "fa-solid fa-magnifying-glass",
        },
        {
            id: "Menu",
            name: "Menu",
            icon: "fa-solid fa-bars",
        },
    ]

    var iconsBox = $("<div>");
    iconsBox.attr("class", "iconBox");
    $.each(iconsList, function (index, value) {
        var icon = $("<button>");
        icon.attr("class", value.icon);
        iconsBox.append(icon);
    });

    var expandBar = $("<i>");
    expandBar.attr("class","fa-solid fa-bars");
    expandBar.css({
        "position":"fixed",
        "right":"50px",
        "top":"50px",
        "z-index":"11"
    });
    expandBar.click(function() {
        navbar.toggleClass("active");
        expandBar.toggleClass("fa-xmark")
    });

    var windowWidth = $(window).width();
    if(windowWidth > 576) {
        expandBar.css("display","none")
    } else if(windowWidth < 576) {
        expandBar.css("display","block")
    }

    navbar.append(contact, iconsBox);
    header.append(navbar);
    const lastButton = iconsBox.find("button:last-child");
    lastButton.css("position", "relative");
    lastButton.before("<p>" + "Menu" + "</p>");
    var before = lastButton.prev();
    before.attr("class", "before_btn");
    

    //main section

    //creating variable storing properties For same ui element
    const titleStyle = {
        "color": "#fff",
        "fontSize": "55px",
        "textShadow": "1px 1px 5px #000"
    }
    const linkStyle = {
        "padding": "15px 25px",
        "backgroundColor": "#fff",
        "color": "#000",
        "textDecoration": "none",
    }
    //main content start
    var main_content = $("<main>");
    main_content.attr("class", "main_content");

    var motherDay = $("<div>");
    motherDay.attr("class", "motherDay");

    var title = $("<h1>");
    title.text("Mother's Day");
    title.css(titleStyle)
    var link = $("<a>");
    link.text("EXPLORE GIFTS FOR HER")
    link.attr("href", "#");
    link.css(linkStyle)

    motherDay.append(title, link);

    //HBGsXNewIn

    //HBGs Section
    var HBGsXNewIn = $("<section>");
    HBGsXNewIn.attr("id", "HBGsXNewIn");

    var HBGs = $("<div>");
    HBGs.attr("class", "HBGs");
    var title = $("<h1>");
    title.text("HandBags");
    title.css(titleStyle);
    var link = $("<a>");
    link.text("EXPLORE THE NEW STYLES");
    link.attr("href", "#");
    link.css(linkStyle);

    HBGs.append(title, link);

    //New In Section
    var NewIn = $("<div>");
    NewIn.attr("class", "NewIn");
    var title = $("<h1>");
    title.text("New In");
    title.css(titleStyle)
    var link = $("<a>");
    link.text("EXPLORE THE SELECTON")
    link.attr("href", "#");
    link.css(linkStyle)

    NewIn.append(title, link)

    HBGsXNewIn.append(HBGs, NewIn);

    //JwlXSneakers

    var JwlXSneakers = $("<section>");
    JwlXSneakers.attr("id", "JwlXSneakers");

    var Jwl = $("<div>");
    Jwl.attr("class", "Jwl");
    var title = $("<h1>");
    title.text("Fine Jewelery");
    title.css(titleStyle);
    var link = $("<a>");
    link.text("EXPLORE THE COLLECTION");
    link.attr("href", "#");
    link.css(linkStyle);

    Jwl.append(title, link);

    //Sneaker Section
    var sneakers = $("<div>");
    sneakers.attr("class", "sneakers");
    var title = $("<h1>");
    title.text("GUCCI RE-WEB");
    title.css(titleStyle)
    var link = $("<a>");
    link.text("EXPLORE SNEAKERS")
    link.attr("href", "#");
    link.css(linkStyle)

    sneakers.append(title, link)

    JwlXSneakers.append(Jwl, sneakers);

    //featured
    var featuredSection = $("<section>");
    featuredSection.attr("id", "featuredSection")

    var loafer = $("<img>");
    loafer.attr("src", "/img/craft story.avif");
    loafer.attr("class", "loafer");

    var craftStory = $("<h1>").html("A STORY OF<br>CRAFT:<br>ELEVATING<br> THE HORSEBITK<br>LOAFER");
    craftStory.css({
        "fontSize": "4vw",
        "textAlign": "center",
        "fontWeight": "100"
    })

    var text = $("<p>" + "An exploration of the artisanship behind the platform silhouette. " + "</p>");
    text.css("fontSize", "2.5vw")

    var link = $("<a>");
    link.text("Discover more");
    link.attr("href", "https://www.gucci.com/us/en/#the-making-of-the-gucci-horsebit-loafer-platform");
    link.css({
        "color": "#000",
        "fontWeight": "bolder"
    });
    var content = $("<div>");
    content.css({
        "width": "45%",
        "textAlign": "center"
    })
 
    var windowWidth = $(window).width();
    if(windowWidth > 992) {
        content.append(craftStory, text, link);
    }
    if(windowWidth < 992) {
        var craftStory = $("<h1>").html("A STORY OF CRAFT: ELEVATING  THE HORSEBITK<br>LOAFER");
        craftStory.css({
            "fontSize":"6vw",
            "fontWeight":"400",
        });
        content.append(craftStory,text,link);
        content.css("width","95%")
}

    featuredSection.append(loafer, content);

    //services
    //declaring var for the styles of the same ui element
    var imgStyle = {
        "width": "100%",
        "height": "65vh",
    }
    var textStyle = {
        "lineHeight": "40px",
    }
    var contentStyle = {
        "width": "90%",
    }
    var linkStyles = {
        "color": "#000",
        "textDecoration": "underline",
        "fontSize": "25px",
    }

    var service = $("<section>");
    service.attr("id", "service");

    var serviceCategory = $("<div>");
    serviceCategory.attr("class", "serviceCategory");

    //personalization
    var personalizationCategory = $("<div>");
    personalizationCategory.attr("class","categoryStyle");
    var img = $("<img>");
    img.attr("src", "/img/personalization.avif");
    img.css(imgStyle);

    var content = $("<div>");
    content.css(contentStyle);

    var title = $("<h1>");
    title.text("PERSONALIZATION");

    var text = $("<p>");
    text.text("Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.");
    text.css(textStyle);

    var link = $("<a>");
    link.text("Discover The Collection");
    link.attr("href", "#");
    link.css(linkStyles);

    content.append(title, text, link);

    personalizationCategory.append(img, content);

    //packaging
    var packagingCategory = $("<div>");
    packagingCategory.attr("class","categoryStyle");
    var img = $("<img>");
    img.attr("src", "/img/packing.avif");
    img.css(imgStyle);

    var content = $("<div>");
    content.css(contentStyle);

    var title = $("<h1>");
    title.text("PACKAGING");

    var text = $("<p>");
    text.html("The signature Gucci box comes with a cotton canvas tote bag, a complimentary piece that can<br>be used again and again.");
    text.css(textStyle);

    var link = $("<a>");
    link.text("Explore Gucci's Packaging");
    link.attr("href", "#");
    link.css(linkStyles);

    content.append(title, text, link);

    packagingCategory.append(img, content);

    //collect in
    var collectInCategory = $("<div>");
    collectInCategory.attr("class","categoryStyle");

    var img = $("<img>");
    img.attr("src", "/img/collect in store.avif");
    img.css(imgStyle);

    var content = $("<div>");
    content.css(contentStyle);

    var title = $("<h1>");
    title.text("COLLECT IN STORE");

    var text = $("<p>");
    text.text("Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.");
    text.css(textStyle);

    var link = $("<a>");
    link.text("Discover How");
    link.attr("href", "#");
    link.css(linkStyles);

    content.append(title, text, link);

    collectInCategory.append(img, content);

    serviceCategory.append(personalizationCategory, packagingCategory, collectInCategory);

    service.append(serviceCategory);
    main_content.append(motherDay, HBGsXNewIn, JwlXSneakers, featuredSection, service);

    var footer = $("<footer>");

    body.append(logo, header,expandBar, main_content, footer);

})

