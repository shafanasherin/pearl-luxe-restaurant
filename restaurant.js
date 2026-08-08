// CTA button in hero/home section
// 'Reserve Our Table' ബട്ടൺ ക്ലിക്ക് ചെയ്യുമ്പോൾ ഫോമിലേക്ക് സ്ക്രോൾ ചെയ്യാനുള്ള ഫങ്ഷൻ
function scrollReservation() {
    const reservationSection = document.getElementById("booking-section");
    if (reservationSection) {
        reservationSection.scrollIntoView({ behavior: "smooth" });
    }
}

// 'Explore Our Menu' ബട്ടൺ ക്ലിക്ക് ചെയ്യുമ്പോൾ മെനു പേജിലേക്ക് പോകാനുള്ള ഫങ്ഷൻ
function scrollToMenu(){ 
const menuSection = document.getElementById("Menu"); // ഇവിടെ 'Menu' എന്നത് id ആണ്
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
    }
  }

//MENU
function toggleMenu(listId) {
    // നിലവിൽ തുറന്നിരിക്കുന്ന മറ്റെല്ലാ മെനു ലിസ്റ്റുകളും കണ്ടുപിടിക്കുക
    const allLists = document.querySelectorAll('.menu-list');
    
    allLists.forEach(list => {
        // ക്ലിക്ക് ചെയ്ത ലിസ്റ്റ് ഒഴികെ ബാക്കിയെല്ലാം ക്ലോസ് ചെയ്യുക (Accordian Effect)
        if (list.id !== listId) {
            list.classList.remove('show');
        }
    });

    // ക്ലിക്ക് ചെയ്ത മെനു ലിസ്റ്റ് തിരഞ്ഞെടുക്കുക
    const targetList = document.getElementById(listId);
    
    // അത് അടഞ്ഞിരിക്കുകയാണെങ്കിൽ തുറക്കുക, തുറന്നിരിക്കുകയാണെങ്കിൽ അടയ്ക്കുക
    if (targetList) {
        targetList.classList.toggle('show');
    }
}
// for play video
document.querySelectorAll('.video-hover').forEach(video => {
    video.addEventListener('click', function() {
        // ക്ലിക്ക് ചെയ്യുമ്പോൾ വീഡിയോ പോസ് ആണെങ്കിൽ പ്ലേ ചെയ്യുക
        if (this.paused) {
            this.play();
        }

        // ശബ്ദം ഓണാക്കുന്നു (Unmute)
        this.muted = false;

        // ഫുൾ സ്‌ക്രീൻ ആക്കാനുള്ള കോഡ് (വിവിധ ബ്രൗസറുകൾക്കായി)
        if (this.requestFullscreen) {
            this.requestFullscreen();
        } else if (this.webkitRequestFullscreen) { /* Safari / iOS */
            this.webkitRequestFullscreen();
        } else if (this.msRequestFullscreen) { /* IE11 */
            this.msRequestFullscreen();
        }
    });

    // യൂസർ ഫുൾ സ്‌ക്രീൻ ക്ലോസ് ചെയ്യുമ്പോൾ വീഡിയോ വീണ്ടും മ്യൂട്ട് ആകാൻ
    const fullscreenChangeEvents = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'];
    fullscreenChangeEvents.forEach(eventType => {
        document.addEventListener(eventType, () => {
            // ഇപ്പോൾ ഫുൾ സ്‌ക്രീനിൽ ഒന്നും ഇല്ലെങ്കിൽ വീഡിയോ മ്യൂട്ട് ചെയ്യുക
            if (!document.fullscreenElement && 
                !document.webkitFullscreenElement && 
                !document.mozFullScreenElement && 
                !document.msFullscreenElement) {
                video.muted = true;
            }
        });
    });
});

// PRIVACY POLICY //
 // പോപ്പ് അപ്പ് തുറക്കാൻ
    function openPrivacy(e) {
        if(e) e.preventDefault();
        document.getElementById("privacyModal").style.display = "flex";
    }

    // പോപ്പ് അപ്പ് അടയ്ക്കാൻ
    function closePrivacy() {
        document.getElementById("privacyModal").style.display = "none";
    }
    
    // ബോക്സിന് പുറത്ത് ക്ലിക്ക് ചെയ്താൽ അടഞ്ഞുപോകാൻ
    window.onclick = function(event) {
        let modal = document.getElementById("privacyModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. LEAVE A REVIEW CODE
  // ==========================================
  const stars = document.querySelectorAll(".review-box .star");
  const reviewForm = document.getElementById("reviewForm");
  const guestName = document.getElementById("guestName");
  const guestText = document.getElementById("guestText");
  const reviewMsg = document.getElementById("msg");
  let selectedRating = 0; // യൂസർ തിരഞ്ഞെടുക്കുന്ന റേറ്റിംഗ് സ്റ്റോർ ചെയ്യാൻ

  // നക്ഷത്രങ്ങൾ ക്ലിക്ക് ചെയ്യുമ്പോൾ നിറം മാറാനുള്ള ലോജിക്
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.getAttribute("data-value"));
      
      // തിരഞ്ഞെടുത്ത നക്ഷത്രം വരെയുള്ളവയ്ക്ക് 'active' ക്ലാസ് നൽകുക, ബാക്കിയുള്ളവ മാറ്റുക
      stars.forEach((s, idx) => {
        if (idx < selectedRating) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });
    });
  });

  // റിവ്യൂ ഫോം സബ്മിറ്റ് ചെയ്യുമ്പോൾ
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault(); // പേജ് റീഫ്രഷ് ആകുന്നത് തടയാൻ

    const name = guestName.value.trim();
    const text = guestText.value.trim();

    // റേറ്റിംഗ് നൽകിയിട്ടുണ്ടോ എന്ന് പരിശോധിക്കുന്നു
    if (selectedRating === 0) {
      reviewMsg.style.color = "red";
      reviewMsg.textContent = "ദയവായി ഒരു സ്റ്റാർ റേറ്റിംഗ് തിരഞ്ഞെടുക്കുക!";
      return;
    }

    // ഡാറ്റ ഒബ്ജക്റ്റ് (ഇത് ബാക്കെൻഡിലേക്ക് അയക്കാൻ ഉപയോഗിക്കാം)
    const reviewData = {
      name: name,
      review: text,
      rating: selectedRating
    };

    console.log("Review Submitted Successfully:", reviewData);

    // വിജയകരമായി സബ്മിറ്റ് ചെയ്താൽ കാണിക്കേണ്ട മെസ്സേജ്
    reviewMsg.style.color = "green";
    reviewMsg.textContent = "Your review has been successfully submitted. Thank you!";

    // ഫോം റീസെറ്റ് ചെയ്യുക
    reviewForm.reset();
    selectedRating = 0;
    stars.forEach(s => s.classList.remove("active"));
  });


  
  // 2. RESERVE OUR TABLE CODE
  const bookingForm = document.querySelector(".booking-table form");
  const resName = document.getElementById("name");
  const resAddress = document.getElementById("Address");
  const resPhone = document.getElementById("phone-number");
  const resMembers = document.querySelector(".booking-table input[type='number']");

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault(); // പേജ് റീഫ്രഷ് ആകുന്നത് തടയാൻ

    const nameValue = resName.value.trim();
    const addressValue = resAddress.value.trim();
    const phoneValue = resPhone.value.trim();
    const membersValue = resMembers.value.trim();

    // എല്ലാ ഫീൽഡുകളും പൂരിപ്പിച്ചിട്ടുണ്ടോ എന്ന് ഉറപ്പുവരുത്തുന്നു
    if (!nameValue || !addressValue || !phoneValue || !membersValue) {
      alert("Please fill in all mandatory fields (*)!");
      return;
    }

    // ഫോൺ നമ്പർ വാലിഡേഷൻ (10 അക്കങ്ങൾ ഉണ്ടോ എന്ന് നോക്കുന്നു)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneValue)) {
      alert("Please provide a valid 10-digit phone number!");
      return;
    }

    // അംഗങ്ങളുടെ എണ്ണം വാലിഡേഷൻ
    if (parseInt(membersValue) <= 0) {
      alert("The number of members must be at least 1!");
      return;
    }

    // ഡാറ്റ ഒബ്ജക്റ്റ്
    const bookingData = {
      name: nameValue,
      address: addressValue,
      phone: phoneValue,
      members: parseInt(membersValue)
    };

    console.log("Table Reserved Successfully:", bookingData);
    alert("Your table has been successfully reserved!");

    // ഫോം റീസെറ്റ് ചെയ്യുക
    bookingForm.reset();
  });
});
