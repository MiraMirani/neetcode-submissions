/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {

    canAttendMeetings(intervals) {

        let conflict = false
        intervals = intervals.sort((a,b)=>a.start-b.start)
        for(let i = 0 ; i< intervals.length ; i++){
        
        const condition1 = intervals[i]?.start >= intervals[i+1]?.start && intervals[i]?.start < intervals[i+1]?.end
        const condition2 = intervals[i+1]?.start >= intervals[i]?.start && intervals[i+1]?.start < intervals[i]?.end

        if(condition1 || condition2 ){
            conflict = true
            break;
        }
        }

        return !conflict
    }
}
