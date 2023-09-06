window.addEventListener('scroll', () => {
    const overlayImage = document.querySelector('.overlay-image');
    const textContainer = document.querySelector('.text-container');
    const navbar = document.querySelector('.navbars');
    const logo = document.querySelector('.logo');
    const tabs1 = document.querySelector('.tab0');
    const tabs2 = document.querySelector('.tab1');
    const logo_text = document.querySelector('.logo_text');
    const icon = document.querySelector('.bi');
    const city = document.querySelector('.city_head');
    const mountains = document.querySelector('.mountains_head');
     // Select the navbar element
  
    const scrollPosition = window.scrollY;
  
    // Adjust the bottom position of the overlay image
    overlayImage.style.bottom = `${-scrollPosition}px`;
    overlayImage.style.opacity = 1 - scrollPosition / 200;
    // Adjust the opacity of the text container
    textContainer.style.opacity = 1 - scrollPosition / 200; // Adjust 200 based on your preference
  
    // Change navbar background color based on scroll direction
    if (scrollPosition > 200) {
      navbar.style.backgroundColor = 'white';
      logo.style.border = '1px solid #4D4D4D';
      tabs1.style.color ='#4D4D4D';
      tabs1.style.borderBottom = '2px solid #4D4D4D ';
      tabs2.style.color ='#4D4D4D';
      tabs2.style.borderBottom = '2px solid #4D4D4D ';
      logo_text.style.display = 'block';
      icon.style.color ='#4D4D4D';
      city.style.color = '#4D4D4D';
      mountains.style.color = '#3E4C69';
  // Set the bottom border to 2px solid white
 // Set the bottom border color to white

       // Change to white when scrolling down
    } else {
      navbar.style.backgroundColor = 'transparent';
      logo.style.border = '1px solid white';
      tabs1.style.borderBottom = '2px solid white';
      tabs1.style.color ='white';
      tabs2.style.color ='white';
      tabs2.style.borderBottom = '2px solid white';
      city.style.color = 'rgba(255, 255, 255, 0)';
      mountains.style.color = 'rgba(255, 255, 255, 0)';
      icon.style.color ='#fff';
      // Change back to transparent when scrolling up to the top
    }
  });


  
  var currentMountainId = 'mountain1'; 
  var scheduleData = {
    "mountain1": [
      {
        "time": "25 NOV 2016",
        "activity": "Vestibulum viverra"
      },
      {
        "time": "28 NOV 2016",
        "activity": "Vestibulum viverra"
      },
      {
        "time": "<br/>",
        "activity": " "
      },
      {
        "time": "18 DEC 2016",
        "activity": "Vestibulum viverra"
      },
      {
        "time": "<br/>",
        "activity": ""
      },
      {
        "time": "07 JAN 2017",
        "activity": "Vestibulum viverra"
      }
    ],
    "mountain2": [
      {
        "time": "17 NOV 2016",
        "activity": "Vestibulum viverra"
      },
      {
        "time": "<br/>",
        "activity": " "
      },
      {
        "time": "13 DEC 2016",
        "activity": "Vestibulum viverra"
      },
      {
        "time": "28 DEC 2016",
        "activity": "Vestibulum viverra"
      },
      {
        "time": "<br/>",
        "activity": ""
      },
      {
        "time": "08 FEB 2017",
        "activity": "Vestibulum viverra"
      }
    ]
  };// Set the initial active button ID
  window.onload = function() {
    var button1 = document.getElementById('button1');
    button1.click();
  };
  function toggleMountain(mountainId) {
    var button = document.getElementById('button' + currentMountainId.slice(-1));
    console.log(currentMountainId)
    var schedule = document.getElementById('schedule-' + currentMountainId);
    console.log(schedule)

    // Hide the previous active schedule
    schedule.classList.remove('active-schedule');

    // Reset background color and underline of the previously selected button
    button.classList.remove('active');
    button.style.backgroundColor = '';

    // Update the currentMountainId
    currentMountainId = mountainId;

    // Show the schedule for the clicked mountain
    button = document.getElementById('button' + currentMountainId.slice(-1));
    schedule = document.getElementById('schedule-' + currentMountainId);

    // Change background color and underline of the clicked button
    button.style.backgroundColor = '#AFB3BD';
    button.classList.add('active');

    // Show the schedule for the clicked mountain
    schedule.classList.add('active-schedule');

    // Populate the schedule div with data
    var scheduleDiv = document.getElementById(currentMountainId + '-schedule');
    var scheduleItems = scheduleData[currentMountainId];
    var scheduleHTML = '';

    
    if (scheduleItems) {
      scheduleHTML += '<div>';
      scheduleItems.forEach(function(item) {
        ans = '<div class="overall">' + '<div class="left_bar">' + item.time + '</div>' + '<div class="right_bar">' + item.activity + '</div>'+'</div>';
        scheduleHTML += '<div>' + ans + '</div>';
      });
      scheduleHTML += '</div>';
    }

    scheduleDiv.innerHTML = scheduleHTML;
  }

  /* Your existing JavaScript here */

  window.addEventListener('scroll', function() {
    var footer = document.getElementById('myFooter');
    var lastContentDiv = document.querySelector('.buttons__div'); // Select the last content div
    console.log(isElementInViewport(lastContentDiv))
    if (isElementInViewport(lastContentDiv)) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  });

  // Function to check if the page is scrolled to the bottom
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }