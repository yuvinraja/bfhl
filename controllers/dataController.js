const processData = (req, res) => {
  try {
    const { data } = req.body;

    // Validate input
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input: 'data' must be an array",
      });
    }

    // Personal information
    const userInfo = {
      user_id: 'yuvin_raja_03062004',
      email: 'yuvinrajav@gmail.com', 
      roll_number: '22BCE3942',
    };

    // Initialize arrays
    let oddNumbers = [];
    let evenNumbers = [];
    let alphabets = [];
    let specialCharacters = [];
    let numbers = [];
    let allAlphabets = [];

    // Process each element in the data array
    data.forEach((item) => {
      const str = String(item);

      // Check if it's a number
      if (!isNaN(str) && !isNaN(parseFloat(str)) && str.trim() !== '') {
        const num = parseInt(str);
        numbers.push(num);

        if (num % 2 === 0) {
          evenNumbers.push(str);
        } else {
          oddNumbers.push(str);
        }
      }
      // Check if it's alphabetic
      else if (/^[a-zA-Z]+$/.test(str)) {
        alphabets.push(str.toUpperCase());
        for (let char of str) {
          allAlphabets.push(char.toLowerCase());
        }
      }
      // Everything else is a special character
      else {
        specialCharacters.push(str);
      }
    });

    // Calculate sum of numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0).toString();

    // Create concatenation string with alternating caps in reverse order
    let concatString = '';
    allAlphabets.reverse();
    allAlphabets.forEach((char, index) => {
      if (index % 2 === 1) {
        concatString += char.toLowerCase();
      } else {
        concatString += char.toUpperCase();
      }
    });

    // Prepare response
    const response = {
      is_success: true,
      user_id: userInfo.user_id,
      email: userInfo.email,
      roll_number: userInfo.roll_number,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: sum,
      concat_string: concatString,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({
      is_success: false,
      message: 'Internal server error',
    });
  }
};

module.exports = {
  processData,
};
