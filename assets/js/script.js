$(document).ready(function() {

    $('#background_button').click(function() {
      $('html,body').animate({
        scrollTop: $(".scrolling_bkgd").offset().top -150
      }, 1000);
    });

    $('#projects_button').click(function() {
      $('html,body').animate({
        scrollTop: $(".scroll_sub_text.scrolling_bkgd_2_images").offset().top -200
      }, 1000);
    });

    $('#current_positions_button').click(function() {
      $('html,body').animate({
        scrollTop: $(".scroll_sub_text.sub_text_3").offset().top -270
      }, 1000);
    });

    $('#resume_button').click(function() {
      $(location).attr('href', "https://drive.google.com/open?id=1LkqoMNvq0Eax6ry9rTqVHfZVCay6Oek7");
    });

    $('#connect_button').click(function() {
      $('html,body').animate({
        scrollTop: $(".scrolling_bkgd.scrolling_bkgd_4").offset().top -230
      }, 1000);
    });

    $('#legally').click(function() {
      $(location).attr('href', "https://www.linkedin.com/company/legally-pt/");
    });

    $('#course_to_career').click(function() {
      $(location).attr('href', "https://data-x.blog/projects/project-course-to-career-c2/");
    });

    $('#betblox').click(function() {
      $(location).attr('href', "https://www.linkedin.com/pulse/small-introduction-our-blockchain-project-jaime-aznar-/");
    });

    $('#sfbr').click(function() {
      $(location).attr('href', "https://docs.google.com/presentation/d/1-ze2NHufh8shgVEo3WknzkAu1uomoocqKaaCJp9QHe4/edit?usp=sharing");
    });

    $('#resume_icon').click(function() {
      $(location).attr('href', "https://drive.google.com/open?id=1LkqoMNvq0Eax6ry9rTqVHfZVCay6Oek7");
    });

    $('#facebook_icon').click(function() {
      $(location).attr('href', "https://www.facebook.com/profile.php?id=100004375238428");
    });

    $('#linkedin_icon').click(function() {
      $(location).attr('href', "https://www.linkedin.com/in/joshua-rafael/");
    });

    $('#email_icon').click(function() {
      window.open('mailto:joshuarafael@berkeley.edu?subject=subject&body=body');
    });

});
