// Define artist options for each mood
// Define artist options for each mood
// Define artist options for each mood
var artistOptions = {
    happy: ['Armaan Malik (HINDI)', 'BTS', 'Bruno Mars', 'Chainsmokers', 'Charlie Puth', 'English Mixtape', 'Imagine Dragons', 'Kannada Mixtape', 'Kishore Kumar', 'Liitle Mix', 'Lauv', 'Mohit Chauhan', 'Puneeth Rajkumar', 'Shankar Mahadevan(HINDI)', 'Shreya Ghoshal (HINDI)', 'Shreya Goshal (KANNADA)', 'Sid Sriram (TELUGU)', 'Sonu Nigam (HINDI)', 'Sonu Nigam (KANNADA)', 'Sunidhi Chauhan', 'Taylor Swift', 'Vasuki Vaibhav', 'Vishal - Shekhar', 'Zaeden'],
    sad: ['Alec Benjamin', 'Billie Eilish', 'Clinton Kane', 'Conan Gray', 'Ed Sheeran', 'English Mixtape', 'Harry Styles', 'Hindi Mixtape', 'Jubin Nautiyal', 'Kannada Mixtape', 'Niall Horan', 'Olivia Rodrigo', 'Selena Gomez', 'Shawn Mendes', 'Taylor Swift', 'Udit Narayan'],
    energetic: ['Badshah','Beyonce', 'Chandan Shetty', 'English Mixtape','Harry Sandhu' ,'Kannada Mixtape', 'NSync', 'One Direction', 'Raghu Dixit', 'Rihanna', 'Sanjit Hegde', 'Seventeen', 'Shakira', 'Shankar Mahadevan', 'Stray Kids'],
    
  };
  
  
  function updateArtistDropdown() {
    var moodDropdown = document.getElementById("mood");
    var artistDropdown = document.getElementById("artist");
    var selectedMood = moodDropdown.value;
  
    // Clear existing options
    artistDropdown.innerHTML = '';
  
    // Add new options based on the selected mood
    artistOptions[selectedMood].forEach(function (artist) {
      var option = document.createElement("option");
      option.value = artist;
      option.text = artist;
      artistDropdown.add(option);
      
    });
  }
  
  // Rest of your code...
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Basic authentication logic (for educational purposes only)
    if (username.trim() !== "" && password.trim() !== "") {
        // Hide the login form and show the playlist generator section
        document.getElementById("login-form").style.display = "none";
        document.getElementById("playlist-generator").style.display = "block";
    } else {
        alert("Invalid username or password. Please try again.");
    }
  }
  
  function generatePlaylist() {
    var mood = document.getElementById("mood").value;
    var artist = document.getElementById("artist").value;
  
    var playlistLink = getPlaylistLink(mood, artist);
    displayPlaylistLink(playlistLink);
    displayPlaylist(playlistLink); // Add this line to display the embedded playlist
  }
  
  function getPlaylistLink(mood, artist) {
    switch (mood) {
        case 'happy':
            if (artist === 'Sonu Nigam (KANNADA)') {
                return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0xNqxCAwdvJoPqgSOWYl5d?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; // Link to the happy playlist for YourFavoriteArtist1
            } else if (artist === 'Shreya Goshal (KANNADA)') {
                return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4eJfPVrsnzj0qe44MhpGFH?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; // Link to the happy playlist for YourFavoriteArtist2
            } else if(artist === 'Armaan Malik(KANNADA)'){
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/32iTtPTuiRKgBcV40GtpLA?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
            }else if(artist === 'Puneeth Rajkumar') {
                return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5N640qvkPXgwV4lm3RqR53?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; // Default link for happy mood
            }else if(artist=== 'Vasuki Vaibhav'){
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3tIvRgV0uzhXLWUr1ZAh7T?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
            }else if (artist === 'BTS') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5TZ1C9saswNPEm2YysreHN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  
          }else if (artist === 'Imagine Dragons') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3ym94HxgERfWKSvQk9Kh3L?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
          }
          else if (artist === 'Bruno Mars') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3iECBQ5bHQWLBEvcaJ6pbz?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
          }
          else if (artist === 'Taylor Swift') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0x3wglohDy4DHednSb91wA?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
          }
          else if (artist === 'Liitle Mix') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/34ypFjU1bJAlEyKyUsHFTf?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
          }
          else if (artist === 'Lauv') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6qCzLZCyCqfzG9qveCcDuD?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
          }
          else if (artist === 'Charlie Puth') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7cCWtjGw9MzFyQGEi42MJd?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
          }
          else if (artist === 'Chainsmokers') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2N994e3msN15qOFZHjXlKc?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
          }
          else if (artist=== 'English Mixtape'){
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0jrlHA5UmxRxJjoykf7qRY?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
            
          }else if (artist==='Kannada Mixtape'){
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0WZzDuu8bG3gBgYRlxC7WZ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
          }else if (artist === 'Armaan Malik (HINDI)'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWa2DNhcausF?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'KK'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0XViN0HyZ55Uc1GTQPXuos?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Shreya Ghoshal (HINDI)'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4WELDMV021TUCe87ryn25t?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist == 'Vishal - Shekhar'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4rbLLAr4m1Ju?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Sonu Nigam (HINDI)'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3OEhRbBbFtFT8GdMqGHFw7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Zaeden'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2PWZ3AK6t5kF59oh6xWCug?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Kishore Kumar'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4jxi0KViW5k66cMnPTHIOn?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Shankar Mahadevan(HINDI)'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4XjRa7cn4Eat5M1kxk9C20?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Mohit Chauhan'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5UEkhL9uybWLnbL9H1hhrB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Sunidhi Chauhan'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1SfCKv?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Asha Bhosle'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4oFWNKKfNBiL?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Sid Sriram (TELUGU)'){
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXb5Hc9BmAT8t?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';     
        }         
         case 'sad':
          if (artist === 'Conan Gray') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7o5GO7CUmNxBILv6XLzFDH?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }else if (artist === 'Taylor Swift') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0A6423K9OBVzgksoncbU6h?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }else if (artist === 'Harry Styles') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/603l6SV2uTvCi250uNZMXS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }else if (artist === 'Alec Benjamin') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4tFoyucvcobfniKDBEqGqd?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }else if (artist === 'Niall Horan') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4Ris17TyKAK9HsjuYHFZZM?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }else if (artist === 'Clinton Kane') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37Pdi4we0QFYl8CXqVgkKL?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        } else if (artist === 'Ed Sheeran') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6rHss8qu1W8plqsTl2zp0r?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }else if (artist === 'Shawn Mendes') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0HLhN87LugZHLo12CYbiv3?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }else if (artist === 'Selena Gomez') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5mudZmSJsFtrfTlMGPEoFv?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }
        else if (artist === 'Olivia Rodrigo') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/65xrehZPC2ZXUl96NDyREV?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }else if (artist === 'Billie Eilish') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/50BrVrOg8XIg5a273AznJ6?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }
        else if (artist==='English Mixtape') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6nxPNnmSE0d5WlplUsa5L3?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }else if (artist==='Kannada Mixtape'){
          return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6iC16MXtWgBysN3Ae6S5c7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        }
        else if(artist==='Arijit Singh (HINDI)'){
          return'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6jk3ucx33D7CLURgcfVFOT?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
        }
        else if(artist==='Jubin Nautiyal'){
          return'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6EpsFx7x7svys2p4NR514t?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        }
        else if(artist==='Udit Narayan'){
          return'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3DiXlsTHFIbjyVXe0ESS7f?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        }
        else if(artist==='Hindi Mixtape'){
          return'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5vvAuygCl0RrZnIkAxE22T?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        }
        
  
        case 'energetic':
            if (artist === 'Raghu Dixit') {
                return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2vaXSf0RAi0RWPJEODduHM?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; // Link to the energetic playlist for YourFavoriteArtist5
            } else if (artist === 'Sanjit Hegde') {
                return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2AZPnphibmsHLnvtOOouJ2?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; // Link to the energetic playlist for YourFavoriteArtist6
            } else if (artist==='Shankar Mahadevan'){
                return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4eoTzPiq35BiBwBmuF3vKC?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';    
            } else if (artist=='Chandan Shetty'){
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5ONTYmjVowUoS6lW4dQYhn?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
            }else if (artist==='Kannada Mixtape'){
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3X3Jzccae6nfHtjqgKYcqE?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  
            } else if (artist === 'One Direction') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6f3xANcLIbp7oVE9LabpPT?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
          } else if (artist === 'Seventeen') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2acq3u4Ij48vQtAzzibIhS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
          }else if (artist === 'NSync') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7nr9ZZZIs9aN4dNZs3mAXL?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
          }else if (artist === 'Stray Kids') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2jscd5eEyr90VBeKxz6Kxo?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
          }else if (artist === 'Beyonce') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1csik6nsSmbmnKf6Go6log?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
          }else if (artist === 'Rihanna') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4oChzbq4kJOKKBWSLpI1hq?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
          }else if (artist === 'Shakira') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4EMj9jVHo4rCRSzgTcLL1Y?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
          }else if(artist=== 'English Mixtape') {
              return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3WYmyXrEqRL1UnV3ep13ie?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
          }
          else if(artist=== 'Badshah') {
            return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdctHW27fX32?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
          }
          else if(artist=== 'Harry Sandhu') {
          return '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2LLaKs?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
      }
        }
      }
        
      function generatePlaylist() {
        var mood = document.getElementById("mood").value;
        var artist = document.getElementById("artist").value;
      
        var playlistLink = getPlaylistLink(mood, artist);
        displayPlaylistLink(playlistLink);
        displayPlaylist(playlistLink); // Add this line to display the embedded playlist
      }
      
      function displayPlaylistLink(link) {
        var playlistLinkContainer = document.getElementById("playlist-link");
        playlistLinkContainer.innerHTML = `<p style="color: white;">YOUR GENERATED PLAYLIST: <a href="">${link}</a></p>`;

      }
      

      
      
    